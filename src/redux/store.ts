import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer/reducer';
import authReducer from './authReducer/reducer';
import userReducer from './userReducer/reducer';
import themeReducer from './themeReducer/reducer';
import uiReducer from './uiReducer/reducer';
import { lmsApi } from './api/lmsApi';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    user: userReducer,
    theme: themeReducer,
    ui: uiReducer,
    [lmsApi.reducerPath]: lmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
