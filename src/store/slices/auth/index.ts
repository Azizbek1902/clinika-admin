import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  role: string | null;
  user: {
    id: string | null;
    name: string | null;
  } | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('DKP_access_token') || '',
  role: (localStorage.getItem('role') as string) || '',
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        role: string;
        user: { id: string; name: string };
      }>,
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;

      localStorage.setItem('DKP_access_token', action.payload?.token);
      localStorage.setItem('role', action.payload?.role);
      localStorage.setItem('user', JSON.stringify(action.payload?.user));
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;

      localStorage.removeItem('DKP_access_token');
      localStorage.removeItem('role');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
