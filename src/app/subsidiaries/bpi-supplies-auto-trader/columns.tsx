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
    id: "12",
    name: "Supplying and delivery of corporate wear and promotional material - Parliament of Namibia National council and national assembly",
    dateCompleted: "February 2014",
  },
  {
    id: "13",
    name: "Kunene Regional Council: Supply and delivery of corporate wear",
    dateCompleted: "November 2013",
  },
  {
    id: "17",
    name: "Ministry of Agriculture, Water Forestry - Supply and Delivery of Fencing material to the Government",
    dateCompleted: "December 2015",
  },
];
