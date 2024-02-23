import { format } from "date-fns";

import DataTable from "@/components/table/Data-Table.Component";
import {
  DeviceColumns,
  Devices,
} from "./components/DevicesTableColumns.Component";

const getData = async (): Promise<Devices[]> => {
  return [
    {
      createdAt: "2023-11-27T05:11:03.531Z",
      deviceId: "ALDEVICE",
      deviceName: "Device Aldi Coba",
      userId: "9e225b9002",
      masterId: "HEIZOU",
    },
    {
      createdAt: "2023-10-24T04:50:03.694Z",
      deviceId: "BANJAR",
      deviceName: "Banjarmasin Slowmo",
      userId: "837e413321",
      masterId: "HEIZOU",
    },
    {
      createdAt: "2023-10-30T08:14:19.158Z",
      deviceId: "CAHYADEV",
      deviceName: "Cahya Device",
      userId: "622e3e2b9f",
      masterId: "MASCAHYA2",
    },
  ];
};

const DevicePage = async () => {
  const data = await getData();

  const plainData = data.map((device) => ({
    createdAt: format(new Date(device.createdAt), "MMM dd yyyy"),
    deviceId: device.deviceId,
    masterId: device.masterId,
    userId: device.userId,
    deviceName: device.deviceName,
  }));

  return (
    <div className="text-justify">
      <DataTable columns={DeviceColumns} data={plainData} />
    </div>
  );
};

export default DevicePage;
