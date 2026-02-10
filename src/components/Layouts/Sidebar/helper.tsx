import type { SidebarItem } from '../../../interface/sidebarItem';
import { GoHome } from 'react-icons/go';
import { RiNewspaperLine } from 'react-icons/ri';
import { GrDocumentUser } from 'react-icons/gr';
import { MdOutlineCategory } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { RiFileListLine } from 'react-icons/ri';
import { IoBookOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';

export const adminLinks: SidebarItem[] = [
  {
    id: 'home',
    title: 'Asosiy',
    path: '/',
    icon: <GoHome style={{ marginLeft: '0.2px' }} />,
  },
  // {
  //     id: 'groups',
  //     title: 'Guruhlar',
  //     path: '/group',
  //     icon: <HiOutlineUserGroup />,
  // },
  {
    id: 'users',
    title: 'Foydalanuvchilar',
    path: '/user',
    icon: <GrDocumentUser style={{ scale: '0.90', marginLeft: '-2px' }} />,
  },
  // {
  //     id: 'subjects',
  //     title: "Yo'nalishlar",
  //     path: '/subject',
  //     icon: <RiFileListLine style={{ marginLeft: '-1px' }} />,
  // },
  // {
  //     id: 'news',
  //     title: 'Yangiliklar',
  //     path: '/news',
  //     icon: <RiNewspaperLine />,
  // },
  {
    id: 'categories',
    title: 'Kategoriyalar',
    path: '/category',
    icon: <MdOutlineCategory />,
  },
  {
    id: 'books',
    title: 'Mahsulotlar',
    path: '/book',
    icon: <IoBookOutline style={{ scale: '0.90' }} />,
  },
  {
    id: 'settings',
    title: 'Sozlamalar',
    icon: <IoSettingsOutline />,
    children: [
      { id: 'provinces', title: 'Viloyatlar', path: '/province' },
      { id: 'regions', title: 'Hududlar', path: '/region' },
    ],
  },
];
