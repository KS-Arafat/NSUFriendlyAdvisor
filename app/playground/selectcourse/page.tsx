import Breadcrumb from "@/app/ui/breadcrumb";
import { DancingScript, Rubik } from "@/app/ui/fonts";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CourseField from "./CourseField";
import Logout from "@/app/ui/Logout";

const SelectCourse = async () => {
  const cookieStore = await cookies();

  const uname = atob(cookieStore.get("username")?.value || "");
  return (
    <div className="flex flex-col items-center ">
      <div className="container flex flex-row items-center justify-around">
        <Breadcrumb
          className="mt-5 shadow-md shadow-gray-700"
          breads={[{ href: "/playground/selectcourse", label: "Selection" }]}
        />
        <Logout />
      </div>
      <div className="mt-32 flex flex-col items-center rounded-lg bg-gray-500 p-10">
        <span
          className={
            " bg-gradient-to-bl from-teal-400 via-sky-300 to-orange-400 bg-clip-text px-32 text-6xl font-bold text-transparent" +
            " " +
            DancingScript.className
          }
        >
          Course Selection
        </span>

        <div className="ml-20 mt-10 w-full">
          <span className="bg-gradient-to-bl from-cyan-200 via-teal-300 to-sky-300 bg-clip-text text-left text-xl capitalize text-cyan-200 text-transparent">
            Hello{" "}
            <span className={"font-bold " + Rubik.className}>
              {uname.trim()}
            </span>
            ,<br />
            Enter Course Name:
          </span>
        </div>
        <form
          className="flex w-full flex-col items-center"
          action={async (data: FormData): Promise<void> => {
            "use server";
            const cookieStore = await cookies();
            let courses: Array<string> = [];
            let len: number = 0;
            data.forEach((k) => courses.push(k.toString()));
            courses = courses.filter((c) => {
              len = c.length;
              if (len == 0) return false;
              else return true;
            });
            if (courses.length == 0) return;
            redirect("/playground/watch?courses=" + btoa(courses.toString()));
          }}
        >
          <CourseField maxCourse={3} className="mt-1 w-full px-10" />
          <button
            className="col-span-2 row-start-7 justify-items-center rounded-lg border-b border-white bg-emerald-600 p-3 px-6 text-lg shadow-lg transition hover:scale-105 hover:bg-green-400 hover:text-emerald-600 hover:shadow-green-400"
            type="submit"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectCourse;
