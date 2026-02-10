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
        header: 'Guruh nomi',
        accessorKey: 'title',

    },
    {
        header: 'Guruh davomiyligi',
        accessorKey: 'groupDate',

        cell: ({ row }: any) => {
            const date = `${row?.original?.startDate} - ${row?.original?.endDate}`;
            return date
        },
    },
    {
        header: 'Izoh',
        accessorKey: 'desc',
        meta: {
            headerStyle: { width: '250px', textAlign: 'left' as const },
        },
    },
];
