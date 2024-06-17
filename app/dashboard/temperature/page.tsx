import { fetchData } from "@/app/lib/data";
import Chart from "@/app/components/Chart";
import { use, useState } from "react";

export default async function Page() {
  const data = await fetchData("temperature", 24 * 60 * 60 * 1000);

  return (
    <div>
      <h2 className="text-3xl font-bold ml-4">Temperature Dashboard</h2>
      <Chart data={data} color="#00B5B2" line_color="#00A3A0" />
    </div>
  );
}
