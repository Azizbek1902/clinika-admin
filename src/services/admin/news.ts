import apis from '..';

export default {
    getAll: (query?: string) => apis.api.get(`/admin/news?${query}`),
    getOne: (id: string) => apis.api.get(`/admin/news/${id}`),
    getAllPaginate: (query?: string) =>
        apis.api.get(`/admin/news?${query}`),
    create: (data: any) => apis.api.post('/admin/news', data),
    update: (id: string, data: any) =>
        apis.api.put(`/admin/news/${id}`, data),
    delete: (id: string) => apis.api.delete(`/admin/news/${id}`),
    deleteFile: (id: string, data: { filePath: string }) => apis.api.delete(`/admin/news/deletefile/${id}`, { data }),
};
