import apis from '..';

export default {
  getAll: () => apis.api.get('/panel/orders'),
  getOne: (id: string) => apis.api.get(`/panel/orders/${id}`),
  getAllPaginate: (query?: string) => apis.api.get(`/panel/orders?${query}`),
  create: (data: any) => apis.api.post('/panel/orders', data),
  update: (id: string, data: any) => apis.api.put(`/panel/orders/${id}`, data),
  delete: (id: string) => apis.api.delete(`/panel/orders/${id}`),
  deleteFile: (id: string) => apis.api.delete(`/panel/orders/deletefile/${id}`),
};
