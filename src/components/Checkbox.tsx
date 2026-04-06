import React, { useContext } from 'react';
import type { CheckboxSchema } from '../types/schema';
import { FormContext } from './Form';
import { SwitchWrapper, SwitchToggle, Label } from '../styles/styledComponents';

export const Checkbox: React.FC<{ schema: CheckboxSchema }> = ({ schema }) => {
  const context = useContext(FormContext);

  if (!context) {
    console.warn(`Checkbox ${schema.name} must be rendered inside a Form component.`);
    return null;
  }

  const { state, handleChange } = context;
  const checked = !!state[schema.name];

  return (
    <SwitchWrapper onClick={() => handleChange(schema.name, !checked)} style={schema.style}>
      <SwitchToggle $checked={checked} />
      <Label style={{ marginBottom: 0, cursor: 'pointer' }}>{schema.label}</Label>
    </SwitchWrapper>
  );
};
