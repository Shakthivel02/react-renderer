import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from './types';

const initialState: AppState = {
  entities: {
    users: [
      { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' }
    ]
  },
  toast: { message: '', type: 'success', visible: false },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addEntity: (state, action: PayloadAction<{ key: string; item: any }>) => {
      const { key, item } = action.payload;
      if (!state.entities[key]) state.entities[key] = [];
      state.entities[key].push({ ...item, id: Date.now().toString() });
    },
    deleteEntity: (state, action: PayloadAction<{ key: string; id: string }>) => {
      const { key, id } = action.payload;
      if (state.entities[key]) {
        state.entities[key] = state.entities[key].filter(e => e.id !== id);
      }
    },
    showToast: (state, action: PayloadAction<{ message: string; type: 'success' | 'error' }>) => {
      state.toast = { message: action.payload.message, type: action.payload.type, visible: true };
    },
    hideToast: (state) => {
      state.toast.visible = false;
    }
  },
});

export default appSlice.reducer;
