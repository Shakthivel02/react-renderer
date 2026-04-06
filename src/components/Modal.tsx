import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Renderer } from '../renderer/Renderer';
import { ModalBackdrop, ModalContent } from '../styles/styledComponents';
import { closeModal } from '../redux/uiReducer/action';
import type { RootState } from '../redux/store';
import addUserSchema from '../schema/addUserSchema.json';

const SCHEMAS = {
  addUser: addUserSchema
};

export const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, schemaName } = useSelector((state: RootState) => state.ui.modal);

  if (!isOpen || !schemaName) return null;

  const schema = SCHEMAS[schemaName] as any;

  return (
    <ModalBackdrop onClick={() => dispatch(closeModal())}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Renderer node={schema} />
      </ModalContent>
    </ModalBackdrop>
  );
};
