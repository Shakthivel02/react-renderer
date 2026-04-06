import React from 'react';
import type { CardSchema } from '../types/schema';
import { Renderer } from '../renderer/Renderer';
import { StyledCard, CardHeader } from '../styles/styledComponents';

export const Card: React.FC<{ schema: CardSchema & { header?: any[] } }> = ({ schema }) => {
  return (
    <StyledCard style={schema.style}>
      {schema.header && (
        <CardHeader>
          {schema.header.map((child: any, index: number) => (
            <Renderer key={`header-${index}`} node={child} />
          ))}
        </CardHeader>
      )}
      {schema.children?.map((child, index) => (
        <Renderer key={index} node={child} />
      ))}
    </StyledCard>
  );
};
