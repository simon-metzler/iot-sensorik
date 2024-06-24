import { fetchData } from "@/app/lib/data";
import Chart from "@/app/components/MenuChart";
import DataTable from "@/app/components/DataTable";

export default async function Page() {
  const data = await fetchData("temperature");

  return (
    <div>
      <h2 className="text-3xl font-bold ml-4">Temperature Dashboard</h2>
      <Chart data={data} color="#00B5B2" line_color="#00A3A0" />
      <DataTable data={data} />
    </div>
  );
}
