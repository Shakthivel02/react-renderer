import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { TableSchema } from '../types/schema';
import { PremiumTable, StyledButton } from '../styles/styledComponents';
import { deleteEntity, showToast } from '../redux/appReducer/action';

export const Table: React.FC<{ schema: TableSchema }> = ({ schema }) => {
  const dispatch = useDispatch();
  // We use typing as any here loosely to match root state without circular dependency issues
  const entities = useSelector((state: any) => state.app.entities[schema.entityKey] || []);

  const handleDelete = (id: string) => {
    dispatch(deleteEntity({ key: schema.entityKey, id }));
    dispatch(showToast({ message: 'Item deleted successfully!', type: 'success' }));
  };

  return (
    <PremiumTable>
      <thead>
        <tr>
          {schema.columns.map((col, idx) => (
            <th key={idx}>{col.header}</th>
          ))}
          {schema.actions && schema.actions.length > 0 && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {entities.length === 0 && (
          <tr>
            <td colSpan={(schema.columns.length + (schema.actions?.length ? 1 : 0))} style={{ textAlign: 'center' }}>
              No data found.
            </td>
          </tr>
        )}
        {entities.map((row: any) => (
          <tr key={row.id}>
            {schema.columns.map((col, idx) => (
              <td key={idx}>{row[col.accessor]}</td>
            ))}
            {schema.actions && schema.actions.length > 0 && (
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
  );
};
