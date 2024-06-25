import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <p className="ml-8">Sensorik Projekt.</p>
    </main>
  );
}
