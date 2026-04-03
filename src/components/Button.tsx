import React, { useContext } from 'react';
import type { ButtonSchema } from '../types/schema';
import { FormContext } from './Form';
import { StyledButton } from '../styles/styledComponents';

export const Button: React.FC<{ schema: ButtonSchema }> = ({ schema }) => {
  const context = useContext(FormContext);

  const handleClick = (e: React.MouseEvent) => {
    if (schema.action === 'submitForm' && context) {
      window.alert('Form submitted! Check console or Redux store.');
    }
  };

  return (
    <StyledButton
      type={schema.action === 'submitForm' ? 'submit' : 'button'}
      $variant={schema.variant}
      onClick={handleClick}
    >
      {schema.text}
    </StyledButton>
  );
};
