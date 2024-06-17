import { fetchData } from "@/app/lib/data";
import Chart from "@/app/components/Chart";

export default async function Page() {
  const data = await fetchData("pv_yield_power", 24 * 60 * 60 * 1000);

  return (
    <div>
      <h2 className="text-3xl font-bold ml-4">Sun Power Dashboard</h2>
      <Chart data={data} color="#F0BB41" line_color="#D1A338" />
    </div>
  );
}
