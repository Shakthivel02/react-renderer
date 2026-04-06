import React, { useContext } from 'react';
import type { SelectSchema } from '../types/schema';
import { FormContext } from './Form';
import { InputContainer, Label, StyledSelect } from '../styles/styledComponents';

export const Select: React.FC<{ schema: SelectSchema }> = ({ schema }) => {
  const context = useContext(FormContext);

  if (!context) {
    console.warn(`Select ${schema.name} must be rendered inside a Form component.`);
    return null;
  }

  const { state, handleChange } = context;
  const value = state[schema.name] || '';

  return (
    <InputContainer style={schema.style}>
      {schema.label && <Label>{schema.label}</Label>}
      <StyledSelect
        name={schema.name}
        value={value}
        onChange={(e) => handleChange(schema.name, e.target.value)}
      >
        <option value="" disabled>{schema.label ? `Select ${schema.label}` : 'Select option'}</option>
        {schema.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </StyledSelect>
    </InputContainer>
  );
};
