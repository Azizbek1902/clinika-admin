import apis from '..';

export default {
  getAll: () => apis.api.get('/admin/orders'),
  getOne: (id: string) => apis.api.get(`/admin/orders/${id}`),
  getAllPaginate: (query?: string) => apis.api.get(`/admin/orders?${query}`),
  create: (data: any) => apis.api.post('/admin/orders', data),
  update: (id: string, data: any) => apis.api.put(`/admin/orders/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/orders/${id}`),
  deleteFile: (id: string) => apis.api.delete(`/admin/orders/deletefile/${id}`),
};
