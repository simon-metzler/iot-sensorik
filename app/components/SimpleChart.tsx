"use client";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useState, useId } from "react";

export default function SimpleChart({
  data,
  color,
  line_color,
}: {
  data: any[];
  color: string;
  line_color: string;
}) {
  const gradientId = useId();
  const [selectedData, setSelectedData] = useState(data);

  return (
    <div>
      <AreaChart
        width={500}
        height={250}
        data={selectedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
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
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </div>
  );
}
