import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth.slice';
import chat from './slices/chat.slice';
import tool from './slices/tool.slice';

const store = configureStore({
  reducer: { auth, chat, tool },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
