import apis from '..';

export default {
    getAll: () => apis.api.get('/admin/lesson'),
    getOne: (id: string) => apis.api.get(`/admin/lesson/${id}`),
    getAllPaginate: (query?: string) =>
        apis.api.get(`/admin/lesson?${query}`),
    create: (data: any) => apis.api.post('/admin/lesson', data),
    update: (id: string, data: any) =>
        apis.api.put(`/admin/lesson/${id}`, data),
    delete: (id: string) => apis.api.delete(`/admin/lesson/${id}`),
    deleteFile: (id: string, data: { filePath: string }) =>
        apis.api.delete(`/admin/lesson/deletefile/${id}`, { data }),
};
