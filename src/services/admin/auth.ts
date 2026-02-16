import apis from '..';

export default {
  userAuth: (data: any) => apis.apiNoteken.post('/admin', data),
};
