import Link from "next/link";
import ico from "@/app/favicon.ico";
import Image from "next/image";
import { DancingScript, Roboto, Rubik } from "../ui/fonts";

const Signin = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center bg-[url('../_imgs/bg_image3.svg')]">
      <div className="group m-20 flex w-8/12 flex-col justify-center rounded-3xl bg-[#758397] py-12 shadow-lg hover:shadow-[#a9bedb] xl:w-6/12">
        <Link
          href={"/"}
          className="cursor-default sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <Image
            className="mx-auto rounded-full"
            src={ico}
            alt="AI gen Icon Used "
            width={220}
            height={220}
          />
          <h2
            className={
              DancingScript.className +
              " text-shadow mt-10 bg-gradient-to-br from-red-400 from-30% via-indigo-600 via-50% to-orange-500 to-100% bg-clip-text py-2 text-center text-4xl font-bold capitalize leading-9 tracking-tight text-transparent transition group-hover:from-red-200 group-hover:via-indigo-300 group-hover:to-orange-200 xl:text-5xl"
            }
          >
            Sign in to your account
          </h2>
        </Link>

        <div className="mt-10 flex flex-col sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6 ">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className={
                  Rubik.className +
                  " border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full cursor-default rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-sky-300 focus:border-t-transparent focus:outline-0 disabled:border-0"
                }
                placeholder=" "
                name="email"
                type="email"
              />
              <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full cursor-default select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-300 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-sky-300 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-sky-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px] ">
              <input
                className={
                  Rubik.className +
                  " border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full cursor-default rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-extrabold outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-sky-300 focus:border-t-transparent focus:outline-0 disabled:border-0"
                }
                type="password"
                placeholder=" "
                name="password"
              />
              <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full cursor-default select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-300 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-sky-300 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-sky-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                Password
              </label>
            </div>

            <div>
              <button
                type="submit"
                className={
                  Roboto.className +
                  " text-md flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 leading-6 text-white shadow-sm transition hover:bg-indigo-500 hover:text-indigo-800 hover:shadow-lg hover:shadow-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                }
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="text-md mt-5 flex justify-between">
            <Link
              className="text-green-500 transition group-hover:text-teal-300 hover:group-hover:text-emerald-100"
              href={"/signup"}
            >
              Haven't Signed Up?
            </Link>

            <Link
              href="#"
              className="text-cyan-500 transition group-hover:text-sky-300 hover:group-hover:text-blue-100"
              tabIndex={-1}
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
