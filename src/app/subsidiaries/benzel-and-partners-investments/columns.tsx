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
    id: "9",
    name: "Supplying and delivery of fire fighting vehicle - Ministry of regional and local housing	",
    dateCompleted: "June 2012",
  },
  {
    id: "11",
    name: "Oshakati State Hospital Nuclear Medical Building",
    dateCompleted: "April 2012",
  },
  {
    id: "14",
    name: "Namibia Airports Company - Supply and delivery of fire fighting vehicles and related equipment",
    dateCompleted: "October 2014",
  },
  {
    id: "19",
    name: "Supply and Delivery of Promotional Items to Ministry of Rural and Urban Development",
    dateCompleted: "August 2016",
  },
  {
    id: "20",
    name: "Supply and Delivery of solar Battery strings to MTC",
    dateCompleted: "September 2016",
  },

  {
    id: "22",
    name: "Construction of Rural Toilets in Otjozondjupa Region in Omatako Constituency at Otjongombe and Ouhave",
    dateCompleted: "September 2017",
  },
  {
    id: "23",
    name: "Construction of Boundary Walls at Walvisbay Cemety - Walvisbay Minicipality",
    dateCompleted: "Octoboer 2017",
  },

  {
    id: "25",
    name: "Design, Construction and Commissioning of a Fire Station for Omuthiya Town Council",
    dateCompleted: "September 2021",
  },
];
