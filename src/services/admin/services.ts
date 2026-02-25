import apis from '..';

export default {
  getAll: () => apis.api.get(`/admin/services`),
  getOne: (id: string) => apis.api.get(`/admin/services/${id}`),
  getAllPaginate: (query?: string) => apis.api.get(`/admin/services?${query}`),
  create: (data: any) => apis.api.post('/admin/services', data),
  update: (id: string, data: any) =>
    apis.api.put(`/admin/services/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/services/${id}`),
};
