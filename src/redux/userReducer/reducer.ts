import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserState, UserProfile } from './types';

const initialState: UserState = {
  profiles: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<UserProfile[]>) => {
      state.loading = false;
      state.profiles = action.payload;
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export default userSlice.reducer;
