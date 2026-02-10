import apis from '..'; // d

export default {
  getAll: (query?: string) => apis.api.get(`/admin/group?${query}`),
  getOne: (id: string) => apis.api.get(`/admin/group/${id}`),
  getAllPaginate: (query?: string) =>
    apis.api.get(`/admin/group?${query}`),
  create: (data: any) => apis.api.post('/admin/group', data),
  update: (id: string, data: any) =>
    apis.api.put(`/admin/group/${id}`, data),
  delete: (id: string) => apis.api.delete(`/admin/group/${id}`),
};
