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
    header: 'F.I.SH',
    accessorKey: 'fullName',
    meta: {
      headerStyle: {
        textAlign: 'left' as const,
        whiteSpace: 'nowrap' as const,
      },
    },
  },
  {
    header: 'Manzil',
    accessorKey: 'address',
    meta: {
      headerStyle: {
        textAlign: 'left' as const,
        whiteSpace: 'nowrap' as const,
      },
    },
  },
  {
    header: 'Yil',
    accessorKey: 'year',
    meta: {
      headerStyle: { width: '150px', textAlign: 'left' as const },
    },
  },
  {
    header: 'Sana',
    accessorKey: 'date',
    meta: {
      headerStyle: { width: '150px', textAlign: 'left' as const },
    },
  },
];

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
