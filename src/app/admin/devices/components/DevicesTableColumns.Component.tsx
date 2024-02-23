"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal, SquarePen, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Devices = {
  createdAt: string;
  userId: string;
  masterId: string;
  deviceId: string;
  deviceName: string;
};

export const DeviceColumns: ColumnDef<Devices>[] = [
  //* Select Box column
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select All"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select Row"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  //* CreatedAt Column
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="capitalize">Created</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-justify">{row.getValue("createdAt")}</div>;
    },
  },

  //* User Id Column
  {
    accessorKey: "userId",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="capitalize">User Id</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-justify">{row.getValue("userId")}</div>;
    },
  },

  //* Master Id Column
  {
    accessorKey: "masterId",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="capitalize">Master Id</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-justify">{row.getValue("masterId")}</div>;
    },
  },

  //* Device Id Column
  {
    accessorKey: "deviceId",
    header: () => {
      return <div className="capitalize">Device Id</div>;
    },
    cell: ({ row }) => {
      return <div className="text-justify">{row.getValue("deviceId")}</div>;
    },
  },

  //* Device Name Column
  {
    accessorKey: "deviceName",
    header: () => {
      return <div className="capitalize">Device Name</div>;
    },
    cell: ({ row }) => {
      return <div className="text-justify">{row.getValue("deviceName")}</div>;
    },
  },

  //* Actions Column
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const devices = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="border-secondary">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="space-x-4 p-2 font-medium"
              onClick={() => console.log(devices.deviceId)}
            >
              <SquarePen size={16} />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="space-x-4 p-2 text-red-600 focus:text-red-600 font-medium"
              onClick={() => console.log(devices.deviceId)}
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
