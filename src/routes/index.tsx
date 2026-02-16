import Auth from '../layouts/Auth';
import Main from '../layouts/Main';
import Dashboard from '../pages/Admin/Dashboard';
import Orders from '../pages/Admin/Orders';
import OrdersUser from '../pages/Registrator/Orders';
import Services from '../pages/Admin/Services';
import User from '../pages/Admin/User';
import AuthPage from '../pages/Auth';
import { Navigate } from 'react-router-dom';

// admin

export const adminRouters = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/users',
        element: <User />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];

export const adminsTrator = [
  {
    path: '/',
    element: <Main />,
    children: [
      // {
      //   index: true,
      //   element: <OrdersUser />,
      // },
      {
        path: '/',
        element: <OrdersUser />,
      },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
export const authRouters = [
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '/',
        element: <AuthPage />,
      },
    ],
  },
];
