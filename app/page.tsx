import Image from "next/image";
import Link from "next/link";
import bgimage from "@/public/homeBgImage.jpg";
import icon from "@/public/logo.png";
import { DancingScript } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="m-0 flex min-h-screen w-max min-w-max flex-col items-center justify-between bg-gray-200 p-0">
      <div className="absolute h-20 w-full border-red-100 bg-black opacity-70 blur-lg" />
      <Image
        className="w-screen rounded-b-md shadow-xl shadow-gray-400"
        src={bgimage}
        alt="bg-imagee"
        width={1920}
        height={689}
      />
      <div className="absolute z-10 mt-3 flex w-full justify-center">
        <div className="h-14 w-24 flex-none p-0 pl-5">
          <Image
            src={icon}
            alt="icon"
            height={50}
            width={50}
            className="rounded-full shadow-white hover:animate-pulse"
          />
        </div>

        <div className="-mt-1 grid h-14 grow grid-cols-3 grid-rows-1">
          <div className="peer-sizeanim group grid grid-cols-1 grid-rows-2 transition-all">
            <p
              className={`${DancingScript.className} w-fit border-red-400 text-2xl text-red-400 transition-all duration-500 hover:border-r-2 hover:pr-4 group-hover:text-3xl`}
            >
              Friendly
            </p>
            <p
              className={`${DancingScript.className} w-fit border-blue-400 text-2xl text-blue-400 transition-all duration-500 hover:border-r-2 hover:pr-4 group-hover:text-3xl`}
            >
              Advisor
            </p>
          </div>

          <div className="mt-3 text-xl uppercase text-white">pricing</div>
          <div className="mt-3 text-xl uppercase text-white"> about Us</div>
        </div>

        <div className="mr-5 grid h-10 w-[30%] grid-cols-2 justify-self-center border-l-4 border-double">
          <Link
            href={"/signin"}
            className="col-start-1 mt-2 h-10 w-full border-cyan-300 text-center text-xl text-white transition-all duration-500 hover:border-b hover:text-cyan-400 "
          >
            Sign In
          </Link>
          <Link
            href={"/signup"}
            className={`col-start-2 mt-2 h-10 w-full text-center text-xl text-white transition-all duration-500 hover:border-b hover:border-lime-300 hover:text-lime-300`}
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-24 pt-10">
        <div className="z-10 h-64 w-64 rounded-xl border border-black"></div>
        <div className="z-10 h-64 w-64 rounded-xl border border-black"></div>
        <div className="z-10 h-64 w-64 rounded-xl border border-black"></div>
      </div>
    </main>
  );
}
