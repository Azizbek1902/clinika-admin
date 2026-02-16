import axios from 'axios';
import { store } from '../store';

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseUrl,
});

const apiNoteken = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token || localStorage.getItem('DKP_access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // store.dispatch(logout());
      // window.location.href = '/';
    }
    return Promise.reject(error);
  },
);

export default { api, apiNoteken };
