import apis from '..';

export default {
  getAll: () => apis.api.get('/orders/report/daily'),
  getOne: (id: string) => apis.api.get(`/orders/report/daily/${id}`),
  getAllPaginate: (query?: string) =>
    apis.api.get(`/orders/report/daily?${query}`),
  create: (data: any) => apis.api.post('/orders/report/daily', data),
  update: (id: string, data: any) =>
    apis.api.put(`/orders/report/daily/${id}`, data),
  delete: (id: string) => apis.api.delete(`/orders/report/daily/${id}`),
  deleteFile: (id: string) =>
    apis.api.delete(`/orders/report/daily/deletefile/${id}`),
};
