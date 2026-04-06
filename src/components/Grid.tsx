import React from 'react';
import type { GridSchema } from '../types/schema';
import { Renderer } from '../renderer/Renderer';
import { GridContainer } from '../styles/styledComponents';

export const Grid: React.FC<{ schema: GridSchema }> = ({ schema }) => {
  return (
    <GridContainer $columns={schema.columns} style={schema.style}>
      {schema.children?.map((child, index) => (
        <Renderer key={index} node={child} />
      ))}
    </GridContainer>
  );
};
