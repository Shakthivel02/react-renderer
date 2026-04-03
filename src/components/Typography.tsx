import React from 'react';
import type { TypographySchema } from '../types/schema';
import { StyledTypography } from '../styles/styledComponents';

export const Typography: React.FC<{ schema: TypographySchema }> = ({ schema }) => {
  return (
    <StyledTypography $variant={schema.variant}>
      {schema.text}
    </StyledTypography>
  );
};
