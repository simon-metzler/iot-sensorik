import { fetchData } from "@/app/lib/data";
import Chart from "@/app/components/MenuChart";
import DataTable from "@/app/components/DataTable";

export default async function Page() {
  const data = await fetchData("pv_yield_power");

  return (
    <div>
      <h2 className="text-3xl font-bold ml-4">Sun Power Dashboard</h2>
      <Chart data={data} color="#F0BB41" line_color="#D1A338" />
      <DataTable data={data} />
    </div>
  );
}
