import React from "react";
import { Column, useTable } from "react-table";

interface TableProps<D extends object> {
  columns: ReadonlyArray<Column<D>>;
  data: readonly D[];
}

export function Table<D extends object>({
  columns,
  data,
}: React.PropsWithoutRef<TableProps<D>>) {
  const tableProps = useTable<D>({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableProps;

  return (
    <table {...getTableProps()} className="border rounded-md block">
      <thead>
        {headerGroups.map((headerGroup, key) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="border-y"
            key={key}
          >
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index} className="p-2">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, key) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={key} className="border-y">
              {row.cells.map((cell, index) => {
                return (
                  <td {...cell.getCellProps()} key={index} className="p-2">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  columns: [],
  data: [],
};
