import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard/overview" className="text-lg">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/dashboard/temperature" className="text-lg">
                Temperature
              </Link>
            </li>
            <li>
              <Link href="dashboard/sunpower" className="text-lg">
                Sun Power
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
