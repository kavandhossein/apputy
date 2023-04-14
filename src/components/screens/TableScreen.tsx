import React, { useMemo } from "react";
import { Table } from "../table";
import { User } from "@/types";
import { CellProps, Column } from "react-table";
import Link from "next/link";

interface TableScreenProps {
  data: User[];
  isLoading: boolean;
}

export const TableScreen: React.FC<TableScreenProps> = ({
  data,
  isLoading,
}) => {
  const columns: ReadonlyArray<Column<User>> = useMemo(
    () => [
      {
        accessor: "avatar",
        Header: "Avatar",
        Cell: (e) => {
          const row = e.row.original;
          return (
            <div className="overflow-hidden rounded-full mr-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={row?.avatar}
                alt={row?.first_name}
                className="object-cover"
                width={70}
              />
            </div>
          );
        },
      },
      {
        accessor: "first_name",
        Header: "First Name",
      },
      {
        accessor: "last_name",
        Header: "Last Name",
      },
      {
        accessor: "email",
        Header: "Email",
      },
      {
        Header: "Edit",
        Cell: (e: CellProps<User, string>) => {
          const row = e.row.original;
          return (
            <Link
              href={`/${row.id}`}
              passHref
              className="bg-yellow-400  px-2 rounded-md text-sm hover:bg-yellow-500 transition-all duration-300 active:scale-105"
            >
              Edit
            </Link>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="pt-10">
      <Table<User> columns={columns} data={data} />
    </div>
  );
};
