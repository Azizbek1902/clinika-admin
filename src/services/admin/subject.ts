import apis from '..';

export default {
    getAll: () => apis.api.get('/admin/subject'),
    getOne: (id: string) => apis.api.get(`/admin/subject/${id}`),
    getAllPaginate: (query?: string) =>
        apis.api.get(`/admin/subject?${query}`),
    create: (data: any) => apis.api.post('/admin/subject', data),
    update: (id: string, data: any) =>
        apis.api.put(`/admin/subject/${id}`, data),
    delete: (id: string) => apis.api.delete(`/admin/subject/${id}`),
    deleteFile: (id: string) => apis.api.delete(`/admin/subject/deletefile/${id}`),
};
