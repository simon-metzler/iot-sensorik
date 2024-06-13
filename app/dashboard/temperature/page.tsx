import { fetchData } from "@/app/lib/data";
import Chart from "@/app/components/Chart";

export default async function Page() {
  const data = await fetchData("temperature");

  return (
    <div>
      <h1>Temperature Dashboard</h1>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box m-10">
        <li>
          <a>Stunde</a>
        </li>
        <li>
          <a>Tag</a>
        </li>
        <li>
          <a>Woche</a>
        </li>
      </ul>
      <Chart data={data} color="#00B5B2" line_color="#00A3A0" />
    </div>
  );
}
