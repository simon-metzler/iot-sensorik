import { fetchData } from "@/app/lib/data";
import Chart from "@/app/components/Chart";

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      <h1>Temperature Dashboard</h1>
      <Chart data={data} />
    </div>
  );
}
