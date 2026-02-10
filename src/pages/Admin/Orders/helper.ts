import { Image } from "antd";
import React from "react";
const baseURL = import.meta.env.VITE_IMAGE_URL;
import Img from '../../../assets/book.webp';



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
            const avatar = row.original.cover;
            const photo = avatar ? `${baseURL}/${avatar}` : Img;

            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                React.createElement(Image, {
                    src: photo,
                    alt: row.original.title,
                    width: 70,
                    height: 45,
                    style: { borderRadius: '6px', objectFit: 'cover', cursor: 'pointer' },
                    preview: true,
                    fallback: Img,
                })
            );
        },
    },
    {
        header: 'Kitob nomi',
        accessorKey: 'title',
        meta: {
            headerStyle: { textAlign: 'left' as const, whiteSpace: 'nowrap' as const, },
        },
    },
    {
        header: 'Muallif',
        accessorKey: 'author',
        meta: {
            headerStyle: { textAlign: 'left' as const, whiteSpace: 'nowrap' as const, },
        },
    },
    {
        header: 'Izoh',
        accessorKey: 'desc',
        meta: {
            headerStyle: { width: '150px', textAlign: 'left' as const, },
        },
    },


];


export interface ActiveType {
    label: string;
    value: string;
}


export const activeData: ActiveType[] = [
    { label: 'Faol', value: "true" },
    { label: 'Faol emas', value: "false" },
];

export interface publicOrPrivateType {
    label: string;
    value: string;
}


export const publicOrPrivateData: publicOrPrivateType[] = [
    { label: 'Ommaviy', value: 'true' },
    { label: 'Maxviy', value: "false" },
];