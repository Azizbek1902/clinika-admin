import type { SidebarItem } from '../../../interface/sidebarItem';
import { GoHome } from 'react-icons/go';
import { GrDocumentUser } from 'react-icons/gr';
import { MdOutlineCategory } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';

export const adminLinks: SidebarItem[] = [
  {
    id: 'home',
    title: 'Asosiy',
    path: '/',
    icon: <GoHome style={{ marginLeft: '0.2px' }} />,
  },
  {
    id: 'users',
    title: 'Admistratorlar',
    path: '/users',
    icon: <GrDocumentUser style={{ scale: '0.90', marginLeft: '-2px' }} />,
  },
  {
    id: 'categories',
    title: 'Xizmatlar',
    path: '/services',
    icon: <MdOutlineCategory style={{ scale: '0.90' }} />,
  },
  {
    id: 'books',
    title: 'Buyurtmalar',
    path: '/orders',
    icon: <IoBookOutline style={{ scale: '0.90' }} />,
  },
];
export const registratorLinks: SidebarItem[] = [
  {
    id: 'orders',
    title: 'Buyurtmalar',
    path: '/',
    icon: <IoBookOutline style={{ scale: '0.90' }} />,
  },
];
