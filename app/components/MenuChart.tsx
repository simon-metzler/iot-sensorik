"use client";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useState } from "react";

export default function Chart({
  data,
  color,
  line_color,
}: {
  data: any[];
  color: string;
  line_color: string;
}) {
  const [selectedData, setSelectedData] = useState(data);

  function handleHourClick() {
    // Filter data for the last hour
    const lastHourData = data.filter((item) => {
      const currentTime = new Date().getTime();
      const itemTime = new Date(item.timestamp).getTime();
      return currentTime - itemTime <= 60 * 60 * 1000;
    });
    setSelectedData(lastHourData);
  }

  function handleHalfDayClick() {
    // Filter data for the last 12 hours
    const lastHalfDayData = data.filter((item) => {
      const currentTime = new Date().getTime();
      const itemTime = new Date(item.timestamp).getTime();
      return currentTime - itemTime <= 12 * 60 * 60 * 1000;
    });
    setSelectedData(lastHalfDayData);
  }

  function handleDayClick() {
    // Filter data for the last 24 hours
    const lastDayData = data.filter((item) => {
      const currentTime = new Date().getTime();
      const itemTime = new Date(item.timestamp).getTime();
      return currentTime - itemTime <= 24 * 60 * 60 * 1000;
    });
    setSelectedData(lastDayData);
  }

  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box m-10">
        <li>
          <a onClick={() => handleHourClick()}>Stunde</a>
        </li>
        <li>
          <a onClick={() => handleHalfDayClick()}>Halbtag</a>
        </li>
        <li>
          <a onClick={() => handleDayClick()}>Tag</a>
        </li>
      </ul>
      <AreaChart
        width={1000}
        height={450}
        data={selectedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="timestamp" tickCount={2} />
        <YAxis domain={["dataMin-2", "dataMax+2"]} tickCount={5} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={line_color}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
}
