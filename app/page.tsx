import Image from "next/image";
import Link from "next/link";
import bgimage from "@/public/homeBgImage.jpg";
import img_Automation from "@/public/automation.png";
import img_CaptchSolve from "@/public/captchaSolver.png";
import img_WebScarping from "@/public/webScraping.png";
import { DancingScript, Lobster, Roboto } from "@/app/ui/fonts";
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
      <div className="z-30 mb-[4vw] mt-[12vw] h-[20vw] w-full text-center lg:mt-[15vw] xl:mt-[15vw]">
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
      <div className="z-20 mt-8 flex w-full flex-col items-center ">
        <div className="grid w-[80vw] grid-cols-1 justify-items-center pt-10 align-middle lg:w-[80vw] xl:w-[60vw] 2xl:w-[50vw]">
          <div className="grid w-full grid-cols-12 rounded-xl p-3">
            <Image
              src={img_Automation}
              alt="automation"
              className="col-span-2 aspect-square h-32 w-32 self-center rounded-3xl"
            />
            <div
              className={
                Roboto.className +
                " col-span-10 col-start-3 w-full rounded-xl border bg-gradient-to-r from-[rgb(103,167,223)] via-blue-300 to-sky-300 p-3 pt-5 text-xl text-white"
              }
            >
              This tool automates the drudgery! It scours your university's
              website for courses, identifies openings, and even snags a seat
              for you all without lifting a finger. Say goodbye to endless
              course browsing and hello to a streamlined enrollment process.
            </div>
          </div>
        </div>
        <div className="grid w-[80vw] grid-cols-1 justify-items-center align-middle lg:w-[80vw] xl:w-[60vw] 2xl:w-[50vw]">
          <div className="grid w-full grid-cols-12 gap-7 rounded-xl p-3">
            <div
              className={
                Roboto.className +
                " col-span-10 w-full rounded-xl border bg-gradient-to-br from-orange-300 to-[rgb(255,192,90)] p-3 pt-5 text-xl text-white"
              }
            >
              Frustrated with captchas slowing down your course enrollment
              automation? This tool tackles them too! It uses clever text
              recognition (OCR) to bypass those pesky captchas, automatically
              filling the code and submitting the form. Now, enrolling in your
              desired courses is a breeze!
            </div>
            <Image
              src={img_CaptchSolve}
              alt="automation"
              className="col-span-2 aspect-square h-32 w-32 self-center rounded-2xl"
            />
          </div>
        </div>

        <div className="grid w-[80vw] grid-cols-1 justify-items-center  align-middle lg:w-[80vw] xl:w-[60vw] 2xl:w-[50vw]">
          <div className="grid w-full grid-cols-12 rounded-xl p-3">
            <Image
              src={img_WebScarping}
              alt="automation"
              className="col-span-2 aspect-square h-32 w-32 self-center rounded-3xl"
            />
            <div
              className={
                Roboto.className +
                " col-span-10 col-start-3 w-full rounded-xl border bg-gradient-to-r from-[rgb(0,71,107)] via-blue-300 to-[rgb(135,182,221)] p-3 pt-5 text-xl text-white"
              }
            >
              This tool acts like a data magnet, scraping valuable information
              from another website. It filters out unnecessary clutter,
              presenting you with the key details you need. The process runs
              continuously, ensuring you have access to real-time data updates.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-10 w-full sm:bg-slate-50 md:bg-red-300 lg:bg-blue-400 xl:bg-green-400 2xl:bg-orange-600"></div> */}
    </main>
  );
}

/*


This tool acts like a data magnet, scraping valuable information from another website. It filters out unnecessary clutter, presenting you with the key details you need. The process runs continuously, ensuring you have access to real-time data updates. 
*/
