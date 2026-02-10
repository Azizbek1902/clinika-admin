import apis from '..';

export default {
  getAll: () => apis.api.get('/admin/province'),
  getOne: (id: string) => apis.api.get(`/admin/province/${id}`),
  getAllPaginate: (query?: string) =>
    apis.api.get(`/admin/province?${query}`),
  create: (data: any) => apis.api.post('/admin/province', data),
  update: (id: string, data: any) =>
    apis.api.put(`/admin/province/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/province/${id}`),
};
