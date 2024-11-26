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
  {
    id: "2",
    name: "Consultancy and Integration Services for Enterprise Data Warehousing",
    dateCompleted: "In Progress",
  },
  {
    id: "3",
    name: "Supply, Delivery Integration Services for Enterprise Data Warehousing",
    dateCompleted: "In Progress",
  },
  {
    id: "4",
    name: "Signaling, Diameter and SMS Firewall to MTC",
    dateCompleted: "2024",
  },
  {
    id: "5",
    name: "One year subscription and Installation of two outer firewall licenses and professional services to restore Government Services	",
    dateCompleted: "March 2021",
  },
  {
    id: "6",
    name: "Redesign and configuration of data Centre phase 1 & 2 at Office of the Prime Minister and supply and delivery of switches to government offices",
    dateCompleted: "February 2022",
  },
  {
    id: "7",
    name: "Supply and delivery of Palo Alto Firewall to UNAM",
    dateCompleted: "September 2021",
  },
  {
    id: "8",
    name: "Supply and delivery of various Jupiter equipment to Telecom Namibia",
    dateCompleted: "December 2022",
  },
  {
    id: "9",
    name: "Supplying and delivery of fire fighting vehicle - Ministry of regional and local housing	",
    dateCompleted: "June 2012",
  },
  {
    id: "10",
    name: "Supply and Delivery of Computer Equipment - Ministry of Defense Forces",
    dateCompleted: "December 2014",
  },
  {
    id: "11",
    name: "Oshakati State Hospital Nuclear Medical Building",
    dateCompleted: "April 2012",
  },
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
    id: "14",
    name: "Namibia Airports Company - Supply and delivery of fire fighting vehicles and related equipment",
    dateCompleted: "October 2014",
  },
  {
    id: "15",
    name: "Supply and Delivery of top of the rack switches to MTC",
    dateCompleted: "September 2021",
  },
  {
    id: "16",
    name: "University of Namibia: Themes ( Home page, Faculty, Search, Generic) CMS Setup and Installation, Style Guide, Project Management. Implementation, Training Workflow client application, Workflow engine and Process Definition",
    dateCompleted: "October 2015",
  },
  {
    id: "17",
    name: "Ministry of Agriculture, Water Forestry - Supply and Delivery of Fencing material to the Government",
    dateCompleted: "December 2015",
  },
  {
    id: "18",
    name: "Nored - Supply & Delivery of IT Equipment",
    dateCompleted: "April 2016",
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
    id: "21",
    name: "Adult Education Information Management System (AEIMS) Project for the Ministry of Education",
    dateCompleted: "Febreuary 2017",
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
    id: "24",
    name: "Introduction to Junos, Training for Jupiter Certified Network Associate and Introduction to Jupiter firewall at the Office of the Prime Minister",
    dateCompleted: "September 2019",
  },
  {
    id: "25",
    name: "Design, Construction and Commissioning of a Fire Station for Omuthiya Town Council",
    dateCompleted: "September 2021",
  },
];
