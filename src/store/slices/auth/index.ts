import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  role: string | null;
  user: {
    id: string | null;
    name: string | null;
  } | null;
  prefix: number;
  province: string;
  group: string;
}

const initialState: AuthState = {
  token: localStorage.getItem('DKP_access_token') || '',
  role: (localStorage.getItem('role') as string) || '',
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null,
  prefix: Number(localStorage.getItem('prefix')),
  province: localStorage.getItem('province') || '',
  group: localStorage.getItem('group') ?? '',
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
        prefix: number;
        province: string;
        group: string;
      }>
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
      state.prefix = action.payload.prefix;
      state.province = action.payload.province;
      state.group = action.payload.group;

      localStorage.setItem('DKP_access_token', action.payload?.token);
      localStorage.setItem('role', action.payload?.role);
      localStorage.setItem('user', JSON.stringify(action.payload?.user));
      localStorage.setItem('province', action.payload?.province);
      localStorage.setItem('group', action.payload?.group);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;

      localStorage.removeItem('DKP_access_token');
      localStorage.removeItem('role');
      localStorage.removeItem('user');
      localStorage.removeItem('prefix');
      localStorage.removeItem('province');
      localStorage.removeItem('group');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
