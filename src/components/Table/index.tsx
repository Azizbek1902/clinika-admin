import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';
import { TableEl, TableWrap, Td, Th, Tr, Wrap } from './style';

export type DataTableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
};

export default function Table<T>({ columns, data }: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrap>
      <TableWrap>
        <TableEl>
          <thead>
            {table.getHeaderGroups().map((headerGroup, ind) => (
              <tr key={ind}>
                {headerGroup.headers.map(
                  (header, index) =>
                    !header.column.columnDef.meta?.displayNone && (
                      <Th
                        key={index}
                        style={header.column.columnDef.meta?.headerStyle}
                        rowSpan={header.column.columnDef.meta?.rowSpan ?? 1}
                        colSpan={header.column.columnDef.meta?.colSpan ?? 1}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Th>
                    )
                )}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, idx) => (
              <Tr key={idx}>
                {row.getVisibleCells().map((cell, cellIdx) => (
                  <Td
                    key={cellIdx}
                    style={cell.column.columnDef.meta?.bodyStyle}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </tbody>
        </TableEl>
      </TableWrap>
    </Wrap>
  );
}
