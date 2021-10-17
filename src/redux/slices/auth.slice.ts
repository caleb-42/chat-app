import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/Auth';

interface AuthState {
  user: IUser | null | undefined;
}

const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: (state) => ({
      ...state,
      error: null,
      message: '',
    }),
    setAuth: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    signOut: (state) => ({
      ...state,
      user: null,
    }),
  },
});
export const { signOut, setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
