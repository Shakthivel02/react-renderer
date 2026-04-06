import { createSlice } from '@reduxjs/toolkit';
import type { ThemeState } from './types';

const STORAGE_KEY = 'lms-theme';

const storedTheme = localStorage.getItem(STORAGE_KEY);

const initialState: ThemeState = {
  key: storedTheme === 'dark' ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.key = state.key === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, state.key);
    },
  },
});

export default themeSlice.reducer;
