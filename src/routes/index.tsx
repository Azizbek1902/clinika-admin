import Auth from '../layouts/Auth';
import Main from '../layouts/Main';

// admin
import Home from '../pages/Admin/Home';
import ProvincePage from '../pages/Admin/Province';
import Region from '../pages/Admin/Region';
import User from '../pages/Admin/User';
import Group from '../pages/Admin/Group';
import Subject from '../pages/Admin/Subject';
import News from '../pages/Admin/News';
import NewsForm from '../pages/Admin/News/Form';
import AuthPage from '../pages/Auth';
import { Navigate } from 'react-router-dom';
import Lesson from '../pages/Admin/Lesson';
import LessonForm from '../pages/Admin/Lesson/Form';
import Book from '../pages/Admin/Book';
import Category from '../pages/Admin/Category';
import Test from '../pages/Admin/Test';
import TestForm from '../pages/Admin/Test/Form';

export const adminRouters = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/news/form',
        element: <NewsForm />,
      },
      {
        path: '/lesson',
        element: <Lesson />,
      },
      {
        path: '/lesson/form',
        element: <LessonForm />,
      },
      {
        path: '/province',
        element: <ProvincePage />,
      },
      {
        path: '/region',
        element: <Region />,
      },
      {
        path: '/group',
        element: <Group />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/subject',
        element: <Subject />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/book',
        element: <Book />,
      },
      {
        path: '/test',
        element: <Test />,
      },
      {
        path: '/test/form',
        element: <TestForm />,
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
