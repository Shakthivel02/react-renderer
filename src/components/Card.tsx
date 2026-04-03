import React from 'react';
import type { CardSchema } from '../types/schema';
import { Renderer } from '../renderer/Renderer';
import { StyledCard } from '../styles/styledComponents';

export const Card: React.FC<{ schema: CardSchema }> = ({ schema }) => {
  return (
    <StyledCard>
      {schema.children?.map((child, index) => (
        <Renderer key={index} node={child} />
      ))}
    </StyledCard>
  );
};
