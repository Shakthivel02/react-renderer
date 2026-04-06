import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UIState } from './types';

const initialState: UIState = {
  modal: {
    isOpen: false,
    schemaName: null,
    title: ''
  }
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ schemaName: 'addUser'; title: string }>) => {
      state.modal.isOpen = true;
      state.modal.schemaName = action.payload.schemaName;
      state.modal.title = action.payload.title;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.schemaName = null;
      state.modal.title = '';
    }
  }
});

export default uiSlice.reducer;
