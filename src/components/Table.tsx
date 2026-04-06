import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button';
import type { TableSchema } from '../types/schema';
import { 
  PremiumTable, 
  StyledButton, 
  PaginationFooter, 
  PaginationInfo, 
  PaginationActions
} from '../styles/styledComponents';
import { deleteEntity, showToast } from '../redux/appReducer/action';
import { useGetEntitiesQuery } from '../redux/api/lmsApi';
import { TableSkeleton, SkeletonHeader, SkeletonRow } from './Skeleton';

export const Table: React.FC<{ schema: TableSchema }> = ({ schema }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  // Smart data source: RTK Query for API data, Redux state for local data
  const hasApiEndpoint = !!schema.apiEndpoint;
  const { data: apiData, isLoading, isError } = useGetEntitiesQuery(
    schema.apiEndpoint!,
    { skip: !hasApiEndpoint }
  );

  const localEntities = useSelector((state: any) =>
    state.app.entities[schema.entityKey] || []
  );

  const entities = hasApiEndpoint ? (apiData || []) : localEntities;

  // Reset page when switching entities
  useEffect(() => {
    setCurrentPage(1);
  }, [schema.entityKey]);

  if (isLoading) {
    return (
      <TableSkeleton>
        <SkeletonHeader />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
      </TableSkeleton>
    );
  }

  if (isError) {
    return (
      <TableSkeleton>
        <div style={{ padding: '16px', textAlign: 'center', color: '#dc3545' }}>
          Failed to load data. Please try again later.
        </div>
      </TableSkeleton>
    );
  }

  const handleDelete = (id: string) => {
    dispatch(deleteEntity({ key: schema.entityKey, id }));
    dispatch(showToast({ message: 'Item deleted successfully!', type: 'success' }));
  };

  // Pagination Logic
  const isPaginationEnabled = !!schema.pagination;
  const pageSize = schema.pagination?.pageSize || 10;
  const totalPages = Math.ceil(entities.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedEntities = isPaginationEnabled 
    ? entities.slice(startIndex, startIndex + pageSize)
    : entities;

  return (
    <>
      <PremiumTable style={schema.style}>
        <thead>
          <tr>
            {schema.columns.map((col, idx) => (
              <th key={idx}>{col.header}</th>
            ))}
            {!hasApiEndpoint && schema.actions && schema.actions.length > 0 && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedEntities.length === 0 && (
            <tr>
              <td colSpan={(schema.columns.length + (!hasApiEndpoint && schema.actions?.length ? 1 : 0))} style={{ textAlign: 'center' }}>
                No data found.
              </td>
            </tr>
          )}
          {paginatedEntities.map((row: any, rowIdx: number) => (
            <tr key={row.id || rowIdx}>
              {schema.columns.map((col, idx) => (
                <td key={idx}>{row[col.accessor]}</td>
              ))}
              {!hasApiEndpoint && schema.actions && schema.actions.length > 0 && (
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {schema.actions.map((act, i) => (
                      act.type === 'delete' && (
                        <StyledButton key={i} $variant="danger" onClick={() => handleDelete(row.id)}>
                          {act.label}
                        </StyledButton>
                      )
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </PremiumTable>

      {isPaginationEnabled && totalPages > 1 && (
        <PaginationFooter>
          <PaginationInfo>
            Page {currentPage} of {totalPages} ({entities.length} items)
          </PaginationInfo>
          <PaginationActions>
            <Button 
              schema={{ type: 'button', text: 'Previous', size: 'sm' } as any}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            />
            <Button 
              schema={{ type: 'button', text: 'Next', size: 'sm' } as any}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            />
          </PaginationActions>
        </PaginationFooter>
      )}
    </>
  );
};
