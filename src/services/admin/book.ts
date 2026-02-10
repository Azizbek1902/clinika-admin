import apis from '..';

export default {
  getAll: () => apis.api.get('/admin/book'),
  getOne: (id: string) => apis.api.get(`/admin/book/${id}`),
  getAllPaginate: (query?: string) => apis.api.get(`/admin/book?${query}`),
  create: (data: any) => apis.api.post('/admin/book', data),
  update: (id: string, data: any) => apis.api.put(`/admin/book/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/book/${id}`),
  deleteFile: (id: string) => apis.api.delete(`/admin/book/deletefile/${id}`),
};
