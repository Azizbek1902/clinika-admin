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
    header: 'Nomi',
    accessorKey: 'title',
    meta: {
      headerStyle: {
        textAlign: 'left' as const,
        whiteSpace: 'nowrap' as const,
      },
    },
  },
  {
    header: 'Doktor ismi',
    accessorKey: 'doktor',
    meta: {
      headerStyle: {
        textAlign: 'left' as const,
        whiteSpace: 'nowrap' as const,
      },
    },
  },
  {
    header: 'Xona raqami',
    accessorKey: 'room',
    meta: {
      headerStyle: { width: '150px', textAlign: 'left' as const },
    },
  },
  {
    header: 'Narxi',
    accessorKey: 'price',
    meta: {
      headerStyle: { width: '150px', textAlign: 'left' as const },
      bodyStyle: { textAlign: 'left' as const },
    },
    cell: ({ row }: any) => formatPrice(row.original.price),
  },
];

const formatPrice = (price?: number | null): string => {
  if (price === undefined || price === null) return '-';
  if (price === 0) return 'Bepul';

  return `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
};

export interface ActiveType {
  label: string;
  value: string;
}

export const activeData: ActiveType[] = [
  { label: 'Faol', value: 'true' },
  { label: 'Faol emas', value: 'false' },
];

export interface publicOrPrivateType {
  label: string;
  value: string;
}

export const publicOrPrivateData: publicOrPrivateType[] = [
  { label: 'Ommaviy', value: 'true' },
  { label: 'Maxviy', value: 'false' },
];
