import apis from '..';

export default {
    getAll: () => apis.api.get(`/admin/region`),
    getOne: (id: string) => apis.api.get(`/admin/region/${id}`),
    getAllPaginate: (query?: string) =>
        apis.api.get(`/admin/region?${query}`),
    create: (data: any) => apis.api.post('/admin/region', data),
    update: (id: string, data: any) =>
        apis.api.put(`/admin/region/${id}`, data),
    delete: (id: string) => apis.api.delete(`/admin/region/${id}`),
};
