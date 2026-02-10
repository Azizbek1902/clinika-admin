import { Image } from 'antd';
import React from 'react';
const baseURL = import.meta.env.VITE_IMAGE_URL;
import Img from '../../../assets/avatar.jpg';

export const formatPhone = (phone: string): string => {
  const digits = phone?.replace(/\D/g, '');
  const uzNumber = digits?.length > 9 ? digits?.slice(-9) : digits;

  if (uzNumber?.length !== 9) return phone;

  const part1 = uzNumber?.slice(0, 2);
  const part2 = uzNumber?.slice(2, 5);
  const part3 = uzNumber?.slice(5, 7);
  const part4 = uzNumber?.slice(7, 9);

  return `${part1}-${part2}-${part3}-${part4}`;
};

export const columns = [
  {
    header: '№',
    accessorKey: 'index',
    meta: {
      headerStyle: { width: '50px', textAlign: 'center' as const },
      bodyStyle: { textAlign: 'center' as const },
    },
  },
  {
    header: 'Rasm',
    accessorKey: 'photo',
    meta: {
      headerStyle: {
        width: '60px',
      },
    },
    cell: ({ row }: any) => {
      const avatar = row.original.photo;
      const photo = avatar ? `${baseURL}/${avatar}` : Img;

      return React.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
        React.createElement(Image, {
          src: photo,
          alt: row.original.fullName,
          width: 45,
          height: 45,
          style: { borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' },
          preview: true,
          fallback: Img,
        })
      );
    },
  },
  {
    header: 'F.I.Sh',
    accessorKey: 'fullName',
    meta: {
      headerStyle: {
        textAlign: 'left' as const,
        whiteSpace: 'nowrap' as const,
      },
    },
  },
  {
    header: 'Raqami',
    accessorKey: 'phone',
    cell: ({ row }: any) => formatPhone(row.original.phone),
    meta: {
      headerStyle: { width: '150px', textAlign: 'left' as const },
    },
  },
  // {
  //     header: 'Guruh',
  //     accessorKey: 'group',
  //     meta: {
  //         headerStyle: { width: '150px', textAlign: 'left' as const },
  //     },
  // },
  {
    header: 'Hudud',
    accessorKey: 'provinceRegion',
    meta: {
      headerStyle: { width: '200px', textAlign: 'left' as const },
    },
  },
  {
    header: 'Guruh',
    accessorKey: 'group.title',
    meta: {
      headerStyle: { width: '150px', textAlign: 'left' as const },
    },
  },
];
