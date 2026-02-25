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
      headerStyle: { width: '200px', textAlign: 'left' as const },
    },
  },
];
