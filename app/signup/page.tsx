import { DancingScript, Lobster, Rubik } from "../ui/fonts";
import svg_bg from "@/_imgs/bg_image2.svg";

const Signin = () => {
  return (
    <div
      className={
        ' flex h-[100dvh] flex-col items-center justify-center bg-[url("../_imgs/bg_image2.svg")] from-gray-700 via-sky-400 to-gray-700 '
      }
    >
      <form
        className="group/heading grid w-8/12 grid-cols-2 place-items-start gap-3 rounded-lg bg-[#758397] p-10 leading-8 shadow-md shadow-gray-200 transition hover:shadow-2xl hover:shadow-gray-300 xl:h-[70dvh] xl:w-6/12 "
        action=""
      >
        <p
          className={
            DancingScript.className +
            " col-span-2 w-full text-center text-5xl font-bold tracking-tight transition duration-500 group-focus-within/heading:scale-125 group-hover/heading:scale-125"
          }
        >
          <span className="bg-gradient-to-br from-orange-200 from-30% via-teal-400 to-sky-500 bg-clip-text text-5xl text-transparent">
            Sign Up Form
          </span>
        </p>

        <div className="group flex w-full flex-col px-2">
          <p
            className={
              Lobster.className +
              " mb-3 mt-10 h-8 w-fit overflow-hidden rounded-lg text-left text-2xl uppercase mix-blend-hard-light duration-1000 group-focus-within:tracking-widest group-hover:text-cyan-300"
            }
          >
            Student Information
          </p>
          <label
            className={
              Rubik.className +
              " pl-1 text-left text-xl transition group-focus-within:text-cyan-200"
            }
            htmlFor="email"
          >
            Email
          </label>
          <div className="mb-3 w-full rounded-md from-teal-500 via-lime-500 to-violet-500 p-[2px] transition focus-within:bg-gradient-to-bl">
            <input
              className="w-full rounded-md border pl-2 shadow-lg outline-none"
              type="email"
              name="u_email"
              id="email"
            />
          </div>
          <label
            className={
              Rubik.className +
              " pl-1 text-left text-xl transition group-focus-within:text-cyan-200"
            }
            htmlFor="u_pwd"
          >
            Type Password
          </label>
          <div className="mb-3 w-full rounded-md from-orange-500 via-yellow-500 to-cyan-500 p-[2px] transition focus-within:bg-gradient-to-br">
            <input
              className="w-full rounded-md border pl-2 shadow-lg outline-none"
              type="password"
              name="u_pwd"
              id="u_pwd"
            />
          </div>
          <label
            className={
              Rubik.className +
              " pl-1 text-left text-xl transition group-focus-within:text-cyan-200"
            }
            htmlFor="u_rpwd"
          >
            Re-type Password
          </label>
          <div className="w-full rounded-md from-red-500 via-amber-300 to-emerald-500 p-[2px] transition focus-within:bg-gradient-to-br">
            <input
              className="w-full rounded-md border pl-2 shadow-lg outline-none"
              type="password"
              name="u_rpwd"
              id="u_rpwd"
            />
          </div>
        </div>
        <div className="group flex w-full flex-col items-end px-2">
          <p
            className={
              Lobster.className +
              " mb-3 mt-10 h-8 w-fit overflow-hidden rounded-lg text-right text-2xl uppercase mix-blend-hard-light duration-1000 group-focus-within:tracking-widest group-hover:text-orange-300"
            }
          >
            RDS Information
          </p>
          <label
            className={
              Rubik.className +
              " pl-1 text-right text-xl transition group-focus-within:text-orange-200"
            }
            htmlFor="rds_id"
          >
            RDS ID
          </label>
          <div className="mb-3 w-full rounded-md from-teal-500 via-lime-500 to-violet-500 p-[2px] transition focus-within:bg-gradient-to-bl">
            <input
              className="w-full rounded-md border pl-2 shadow-lg outline-none"
              type="text"
              name="rds_id"
              id="rds_id"
            />
          </div>
          <label
            className={
              Rubik.className +
              " pl-1 text-right text-xl transition group-focus-within:text-orange-200"
            }
            htmlFor="rds_pwd"
          >
            RDS Password
          </label>
          <div className="w-full rounded-md from-orange-500 via-yellow-500 to-cyan-500 p-[2px] transition focus-within:bg-gradient-to-tl">
            <input
              className="w-full rounded-md border pl-2 shadow-lg outline-none"
              type="password"
              name="rds_pwd"
              id="rds_pwd"
            />
          </div>
        </div>

        <div className="col-span-2 mt-4 w-full rounded-lg p-3 text-center text-xl">
          <button
            className={
              Rubik.className +
              " w-1/2 rounded-lg bg-gradient-to-br from-blue-400 via-sky-300 to-indigo-200 p-4 tracking-widest text-slate-500 shadow-sm shadow-cyan-400 transition  hover:scale-[1.1] hover:bg-gradient-to-tr hover:text-slate-800 hover:shadow-xl hover:shadow-cyan-300"
            }
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
