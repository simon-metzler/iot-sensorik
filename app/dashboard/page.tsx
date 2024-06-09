import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center space-x-4">
      <Link href="dashboard/login">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Overview</h2>
            <p>Get a short overview for the data.</p>
          </div>
        </div>
      </Link>
      <Link href="dashboard/login">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Temperature</h2>
            <p>Get all the temperature data.</p>
          </div>
        </div>
      </Link>
      <Link href="dashboard/login">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Sun Power</h2>
            <p>Get all the sun power data</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
