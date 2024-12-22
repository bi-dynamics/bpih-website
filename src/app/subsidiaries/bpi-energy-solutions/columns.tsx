"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Project = {
  id: string;
  name: string;
  dateCompleted: string;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "dateCompleted",
    header: "Date Completed",
  },
];

export const data: Project[] = [
  {
    id: "1",
    name: "5MVW - Ejuva One Solar Energy (Pty) Ltd in Gobabis, Omaheke Region",
    dateCompleted:
      "Commercial Operation Date: September 2017. To Operate from September 2017 to August 2042, Renewable",
  },
];
