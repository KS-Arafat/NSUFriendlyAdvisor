import RDS_UserAuth from "@/server/UserAuth";
import { DancingScript } from "../ui/fonts";
import Script from "next/script";
import Breadcrumb from "../ui/breadcrumb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Logout from "@/app/ui/Logout";

const Playground = () => {
  return (
    <div className="flex h-screen flex-col items-center ">
      <div className="container flex flex-row items-center justify-around">
        <Breadcrumb
          className="mt-5 shadow-md shadow-gray-700"
          breads={
            [
              // { href: "/playground/selectcourse", label: "Selection" },
              // { href: "/playground/selectcourse", label: "Selection" },
            ]
          }
        />
        <Logout />
      </div>
      <form
        className="mt-24 flex w-fit flex-col items-center rounded-lg bg-gray-500 p-10 shadow-xl"
        action={RDS_UserAuth}
      >
        <h1
          className={
            DancingScript.className +
            " mb-10 mt-3 h-fit w-fit bg-gradient-to-bl from-cyan-400 via-green-400 to-rose-300 bg-clip-text px-7 text-6xl font-bold text-transparent transition"
          }
        >
          Session Generation
        </h1>
        <label
          htmlFor="rds_pwd"
          className="bg-gradient-to-bl from-blue-200 via-green-200 to-rose-200 bg-clip-text p-3 text-xl font-bold text-transparent"
        >
          Confirm RDS Password
        </label>
        <input
          type="password"
          className="rounded-lg p-2 outline-none"
          name="rds_pwd"
          id="rds_pwd"
        />
        <div className="mt-4 flex scale-150 items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            name="db_save"
            className="peer h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 "
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-blue-900 text-opacity-55 peer-checked:text-opacity-100"
          >
            Update Password?
          </label>
        </div>

        <button
          className="m-3 mb-9 mt-8 rounded-lg bg-green-400 p-3 text-xl shadow-md transition hover:scale-105 hover:bg-emerald-200 hover:text-green-700"
          type="submit"
          id="gen_sess"
        >
          Generate Session
        </button>
      </form>
      <Script>{`document.getElementById('gen_sess').onclick = function() {
    this.innerText = 'Generating...';
  }`}</Script>
    </div>
  );
};

export default Playground;
