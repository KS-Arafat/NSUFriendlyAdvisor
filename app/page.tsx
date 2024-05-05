import Image from "next/image";
import Link from "next/link";
import bgimage from "@/public/homeBgImage.jpg";
import img_Automation from "@/_imgs/WebAutomation.png";
import img_CaptchSolve from "@/_imgs/CaptchaSolver.png";
import img_WebScarping from "@/_imgs/WebScraping.png";
import svg_github from "@/_imgs/github.svg";
import svg_gmail from "@/_imgs/gmail.svg";
import svg_telegram from "@/_imgs/telegram.svg";
import svg_facebook from "@/_imgs/facebook.svg";

import { DancingScript, Lobster, Roboto, Rubik } from "@/app/ui/fonts";
import Navbar from "./ui/Navbar";

export default function Home() {
  return (
    <main className="grid grid-cols-1">
      <div className="">
        <Navbar />
        <div className="absolute h-20 w-full border-red-100 bg-black opacity-70 blur-lg" />
        <Image
          className="absolute -z-50 w-screen  shadow-gray-400"
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

      <div className="group z-20 flex w-full flex-col items-center border-t-4 border-double border-gray-700 bg-gray-700 pt-16 transition-all duration-500 hover:border-emerald-400">
        <div className="-mx-4 flex w-11/12 flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16">
              <div className="bg-primary text-primary mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-opacity-5 md:mb-9 md:h-[90px] md:w-[90px] ">
                <Image
                  src={img_Automation}
                  width={55}
                  height={55}
                  alt=""
                  className="opacity-30 transition-all delay-100 group-hover:opacity-100"
                />
              </div>
              <div className="opacity-30 transition-all delay-150 group-hover:opacity-100">
                <h3
                  className={
                    Rubik.className +
                    " text-dark mb-3 text-2xl font-medium text-orange-400 sm:text-3xl md:mb-5"
                  }
                >
                  Web Automation
                </h3>
                <p className="text-dark-text text-xl text-orange-200 ">
                  Skip Monotonous Jobs
                  <br />
                  With Web Automation
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16">
              <div className="bg-primary text-primary mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-opacity-5 md:mb-9 md:h-[90px] md:w-[90px] ">
                <Image
                  src={img_CaptchSolve}
                  width={55}
                  height={55}
                  alt=""
                  className="opacity-30 transition-all delay-200 group-hover:opacity-100"
                />
              </div>
              <div className="opacity-30 transition-all delay-[260ms] group-hover:opacity-100">
                <h3 className="font-heading text-dark mb-3 text-2xl font-medium text-cyan-400 sm:text-3xl md:mb-5">
                  Captcha Cracker
                </h3>
                <p className={Rubik.className + " text-xl text-cyan-200"}>
                  Don't Need Anymore Captcha
                  <br />
                  For Every Login
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="group mx-auto max-w-[380px] text-center">
              <div className="bg-primary text-primary mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-opacity-5 md:mb-9 md:h-[90px] md:w-[90px] ">
                <Image
                  src={img_WebScarping}
                  security=""
                  height={55}
                  width={55}
                  alt=""
                  className="opacity-30 transition-all delay-300 group-hover:opacity-100"
                />
              </div>
              <div className="opacity-30 transition-all delay-[370ms] group-hover:opacity-100">
                <h3 className="font-heading mb-3 text-2xl font-medium text-teal-400 sm:text-3xl md:mb-5 ">
                  Web Scarping
                </h3>
                <p className={Rubik.className + " text-xl text-teal-200 "}>
                  Filter Unwanted Data,
                  <br />
                  Focus on Main things
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="group group flex h-44 w-full flex-col items-center border-t-2 border-double border-stone-700 bg-stone-700 pt-16 transition-all duration-500 hover:border-fuchsia-400">
        <div className="flex flex-row gap-36">
          <Link
            href={"https://www.facebook.com/profile.php?id=100015242293405"}
            target={"https://www.facebook.com/profile.php?id=100015242293405"}
            className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-blue-300"
          >
            <Image
              src={svg_facebook}
              height={50}
              width={50}
              alt=""
              className="peer pt-2"
            />
            <p
              className={
                Roboto.className +
                " -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-200 peer-hover:text-blue-400"
              }
            >
              Facebook
            </p>
          </Link>
          <Link
            href={"https://github.com/KS-Arafat/NSUFriendlyAdvisor"}
            target={"https://github.com/KS-Arafat/NSUFriendlyAdvisor"}
            className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-white"
          >
            <Image
              src={svg_github}
              height={50}
              width={50}
              alt=""
              className="peer pt-2"
            />
            <p
              className={
                Roboto.className +
                " -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-100 peer-hover:text-white"
              }
            >
              GitHub
            </p>
          </Link>
          <Link
            href={"mailto:kazi.arafat01@northsouth.edu"}
            target="_blank"
            className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-red-600"
          >
            <Image
              src={svg_gmail}
              height={50}
              width={50}
              alt=""
              className="peer pt-2"
            />
            <p
              className={
                Roboto.className +
                " -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-100 peer-hover:text-red-500"
              }
            >
              Mail
            </p>
          </Link>
          <Link
            href={"https://t.me/KS_Arafat"}
            target={"https://t.me/KS_Arafat"}
            className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-sky-500"
          >
            <Image
              src={svg_telegram}
              height={50}
              width={50}
              alt=""
              className="peer pt-2"
            />
            <p
              className={
                Roboto.className +
                " -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-200 peer-hover:text-sky-500"
              }
            >
              Telegram
            </p>
          </Link>
        </div>
      </div>
      {/* <div className="h-10 w-full sm:bg-slate-50 md:bg-red-300 lg:bg-blue-400 xl:bg-green-400 2xl:bg-orange-600"></div> */}
    </main>
  );
}
