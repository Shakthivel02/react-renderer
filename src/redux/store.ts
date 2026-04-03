import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer/reducer';
import authReducer from './authReducer/reducer';
import userReducer from './userReducer/reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
