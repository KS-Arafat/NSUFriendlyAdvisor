import Image from "next/image";
import Link from "next/link";
import icon from "@/public/logo.png";
import { DancingScript } from "@/app/ui/fonts";

const Navbar = () => (
  <div className="absolute flex h-20 w-full justify-center">
    <div className="z-10 mt-3 flex w-full content-center justify-center sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[75%]">
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

        <Link href="/price" className="mt-3 text-lg uppercase text-white">
          Pricing
        </Link>
        <Link href="/about" className="mt-3 text-lg uppercase text-white">
          about Us
        </Link>
      </div>

      <div className="mr-5 grid h-10 w-[30%] grid-cols-2 justify-self-center border-l-4 border-double">
        <Link
          href={"/signin"}
          className="group col-start-1 h-10 w-full overflow-hidden border-cyan-300 pt-2 text-center text-xl text-white transition-all duration-500 hover:border-b hover:text-cyan-300"
        >
          Sign In
          <div className="h-20 w-full translate-y-2 rounded-md bg-sky-200 opacity-50 transition-all duration-500 ease-in-out group-hover:-translate-y-16" />
        </Link>
        <Link
          href={"/signUp"}
          className="group col-start-2 h-10 w-full overflow-hidden border-lime-300 pt-2 text-center text-xl text-white transition-all duration-500 hover:border-b hover:text-lime-400"
        >
          Sign Up
          <div className="h-20 w-full translate-y-2 rounded-md bg-emerald-200 opacity-50 transition-all duration-500 ease-in-out group-hover:-translate-y-16" />
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;
