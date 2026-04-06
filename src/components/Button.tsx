import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import type { ButtonSchema } from '../types/schema';
import { FormContext } from './Form';
import { StyledButton, CircleButton } from '../styles/styledComponents';
import { openModal, closeModal } from '../redux/uiReducer/action';

interface ButtonProps {
  schema: ButtonSchema;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ schema, onClick, disabled }) => {
  const dispatch = useDispatch();
  const context = useContext(FormContext);
  const isSubmitting = context?.isSubmitting || false;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      return;
    }
    
    if (schema.action === 'openModal') {
      dispatch(openModal({ 
        schemaName: schema.target as any || 'addUser',
        title: schema.text 
      }));
    } else if (schema.action === 'closeModal' || (schema.text === 'X' && !schema.action)) {
      dispatch(closeModal());
    }
  };

  const isButtonDisabled = disabled !== undefined ? disabled : isSubmitting;

  if (schema.text === '+' || schema.text === 'X' || schema.variant === 'circle') {
    return (
      <CircleButton type="button" $variant={schema.variant} onClick={handleClick} style={schema.style}>
        {schema.text}
      </CircleButton>
    );
  }

  return (
    <StyledButton
      type={schema.action === 'submitForm' ? 'submit' : 'button'}
      $variant={schema.variant}
      $size={(schema as any).size || 'md'}
      disabled={isButtonDisabled}
      onClick={schema.action !== 'submitForm' ? handleClick : undefined}
      style={schema.style}
    >
      {isSubmitting ? (schema.action === 'submitForm' ? 'Creating...' : 'Processing...') : schema.text}
    </StyledButton>
  );
};
