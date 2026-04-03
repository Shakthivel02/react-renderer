import React, { useContext } from 'react';
import type { InputSchema } from '../types/schema';
import { FormContext } from './Form';
import { InputContainer, Label, StyledInput } from '../styles/styledComponents';

export const Input: React.FC<{ schema: InputSchema }> = ({ schema }) => {
  const context = useContext(FormContext);

  if (!context) {
    console.warn(`Input ${schema.name} must be rendered inside a Form component.`);
    return null;
  }

  const { state, handleChange } = context;
  const value = state[schema.name] || '';

  return (
    <InputContainer>
      {schema.label && <Label>{schema.label}</Label>}
      <StyledInput
        type="text"
        name={schema.name}
        $size={schema.size}
        $variant={schema.variant}
        value={value}
        onChange={(e) => handleChange(schema.name, e.target.value)}
      />
    </InputContainer>
  );
};
