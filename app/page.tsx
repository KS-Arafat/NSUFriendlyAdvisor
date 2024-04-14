import Image from "next/image";
import Link from "next/link";
import bgimage from "@/public/homeBgImage.jpg";
import icon from "@/public/logo.png";
import { DancingScript, Lobster } from "@/app/ui/fonts";
import Navbar from "./ui/Navbar";

export default function Home() {
  return (
    <main className="grid grid-cols-1">
      <div className="">
        <Navbar />
        <div className="absolute h-20 w-full border-red-100 bg-black opacity-70 blur-lg" />
        <Image
          className="absolute -z-50 w-screen rounded-b-md shadow-xl shadow-gray-400"
          src={bgimage}
          alt="bg-imagee"
          width={1920}
          height={689}
        />
      </div>
      <div className="z-30 mt-[12vw] h-[20vw] w-full text-center lg:mt-[15vw] xl:mt-[15vw]">
        <span
          className={
            DancingScript.className +
            " w-fit bg-gradient-to-tr from-teal-300 from-20% via-sky-400 via-40% to-indigo-600 to-90% bg-clip-text text-9xl font-extrabold text-transparent"
          }
        >
          Make Advsing Easy
        </span>
        <p
          className={
            Lobster.className + " mt-4 space-x-6 text-3xl tracking-widest"
          }
        >
          <span className="rounded-xl bg-gradient-to-br from-orange-200 from-60% to-orange-400 bg-clip-text p-2 text-transparent">
            Using
          </span>
          <span className="rounded-xl bg-gradient-to-br from-rose-200 from-40% to-rose-400 bg-clip-text p-2 text-transparent">
            Modern
          </span>
          <span className="rounded-xl bg-gradient-to-bl from-teal-200 from-40% to-teal-600 bg-clip-text p-2 text-transparent">
            Tools
          </span>
        </p>
      </div>
      <div className="mt-10 flex w-full flex-row">
        <div className="h-10 w-full sm:bg-slate-50 md:bg-red-300 lg:bg-blue-400 xl:bg-green-400 2xl:bg-orange-600"></div>
      </div>
    </main>
  );
}
