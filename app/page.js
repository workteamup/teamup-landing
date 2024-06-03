import Image from "next/image";
import Landing from "./components/landing";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-white font-work_sans">
      <Navbar />
      <Landing />
    </div>
  );
}
