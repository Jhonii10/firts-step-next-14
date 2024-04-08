import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex  flex-col items-center justify-between p-24">
       <p className="text-5xl">Home</p>
    </main>
    </>
  );
}
