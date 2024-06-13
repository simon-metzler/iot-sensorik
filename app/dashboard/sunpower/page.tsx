import { fetchData } from "@/app/lib/data";
import Chart from "@/app/components/Chart";

export default async function Page() {
  const data = await fetchData("pv_yield_power");

  return (
    <div>
      <h1>Sun Power Dashboard</h1>
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
      <Chart data={data} color="#F0BB41" line_color="#D1A338" />
    </div>
  );
}
