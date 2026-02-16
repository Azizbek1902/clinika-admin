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
    header: 'Navbat',
    accessorKey: 'orderNumber',
    meta: {
      headerStyle: {
        textAlign: 'left' as const,
        width: '100px',
        whiteSpace: 'nowrap' as const,
      },
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
    header: "Ko'rik nomi",
    accessorKey: 'doktor.title',
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
      headerStyle: { width: '100px', textAlign: 'left' as const },
    },
  },
  {
    header: 'Sana',
    accessorKey: 'date',
    meta: {
      headerStyle: { width: '100px', textAlign: 'left' as const },
    },
  },
];
export const formatPrice = (price?: number) => {
  if (!price) return '0';
  return new Intl.NumberFormat('uz-UZ').format(price);
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
