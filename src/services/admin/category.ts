import apis from '..'; // d

export default {
  getAll: () => apis.api.get('/admin/bookcategory'),
  getOne: (id: string) => apis.api.get(`/admin/bookcategory/${id}`),
  getAllPaginate: (query?: string) =>
    apis.api.get(`/admin/bookcategory?${query}`),
  create: (data: any) => apis.api.post('/admin/bookcategory', data),
  update: (id: string, data: any) =>
    apis.api.put(`/admin/bookcategory/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/bookcategory/${id}`),
};
