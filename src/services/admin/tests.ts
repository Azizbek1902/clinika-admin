import apis from '..'; // d

export default {
  getAll: () => apis.api.get('/admin/test'),
  getOne: (id: string) => apis.api.get(`/admin/test/${id}`),
  getAllPaginate: (query?: string) =>
    apis.api.get(`/admin/test?${query}`),
  create: (data: any) => apis.api.post('/admin/test', data),
  update: (id: string, data: any) =>
    apis.api.put(`/admin/test/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/test/${id}`),
};
