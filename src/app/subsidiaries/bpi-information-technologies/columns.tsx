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
    id: "2",
    name: "Consultancy and Integration Services for Enterprise Data Warehousing for MTC",
    dateCompleted: "In Progress",
  },
  {
    id: "3",
    name: "Supply, Delivery Integration Services for Enterprise Data Warehousing for MTC",
    dateCompleted: "In Progress",
  },
  {
    id: "4",
    name: "Signaling, Diameter and SMS Firewall to MTC",
    dateCompleted: "2024",
  },
  {
    id: "8",
    name: "Supply and delivery of various Jupiter equipment to Telecom Namibia",
    dateCompleted: "December 2022",
  },
  {
    id: "6",
    name: "Redesign and configuration of data Centre phase 1 & 2 at Office of the prime Minister and supply and delivery of switches",
    dateCompleted: "February 2022",
  },
  {
    id: "7",
    name: "Supply and delivery of Palo Alto Firewall to UNAM",
    dateCompleted: "September 2021",
  },
  {
    id: "15",
    name: "Supply and Delivery of top of the rack switches to MTC",
    dateCompleted: "September 2021",
  },
  {
    id: "5",
    name: "One year subscription and Installation of two outer firewall licenses and professional services to restore Government Services	",
    dateCompleted: "March 2021",
  },
  {
    id: "24",
    name: "Introduction to Junos, Training for Jupiter Certified Network Associate and Introduction to Jupiter firewall at the Office of the Prime Minister",
    dateCompleted: "September 2019",
  },
  {
    id: "21",
    name: "Adult Education Information Management System (AEIMS) Project for the Ministry of Education",
    dateCompleted: "Febreuary 2017",
  },
  {
    id: "18",
    name: "Nored - Supply & Delivery of IT Equipment",
    dateCompleted: "April 2016",
  },
  {
    id: "16",
    name: "University of Namibia: Themes ( Home page, Faculty, Search, Generic) CMS Setup and Installation, Style Guide, Project Management. Implementation, Training Workflow client application, Workflow engine and Process Definition",
    dateCompleted: "October 2015",
  },
  {
    id: "10",
    name: "Supply and Delivery of Computer Equipment - Ministry of Defense Forces",
    dateCompleted: "December 2014",
  },
];
