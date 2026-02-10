import apis from '..';

export default {
  getAll: (query?: string) => apis.api.get(`/admin/users?${query}`),
  getOne: (id: string) => apis.api.get(`/admin/users/${id}`),
  getAllPaginate: (query?: string) => apis.api.get(`/admin/users?${query}`),
  create: (data: any) => apis.api.post('/admin/users', data),
  update: (id: string, data: any) => apis.api.put(`/admin/users/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/users/${id}`),
};
