import { useRoutes, type RouteObject } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { adminRouters, authRouters } from '../routes';

export default () => {
  const { role, token } = useSelector((state: RootState) => state.auth);
  const routes: { [key: string]: RouteObject[] } = {
    admin: adminRouters,
    registrator: adminRouters,
  };

  const element = useRoutes(!token ? adminRouters : authRouters);
  // const element = useRoutes(token ? routes[role as string] : authRouters);
  return element;
};
