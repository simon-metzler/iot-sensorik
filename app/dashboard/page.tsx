import { fetchData } from "@/app/lib/data";
import SimpleChart from "@/app/components/SimpleChart";

export default async function Page() {
  const pv_yield_power_data = await fetchData("pv_yield_power");
  const temperature_data = await fetchData("temperature");

  return (
    <div>
      <h2 className="text-3xl font-bold mb-20 mt-6">Overview</h2>
      <div className="flex justify-between">
        <div className="w-1/2 px-4">
          <h2 className="text-xl font-bold mb-2">Sun Power</h2>
          <SimpleChart
            data={pv_yield_power_data}
            color="#F0BB41"
            line_color="#D1A338"
          />
        </div>
        <div className="w-1/2 px-4">
          <h2 className="text-xl font-bold mb-2">Temperature</h2>
          <SimpleChart
            data={temperature_data}
            color="#00B5B2"
            line_color="#00A3A0"
          />
        </div>
      </div>
    </div>
  );
}
