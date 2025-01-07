import Breadcrumb from "@/app/ui/breadcrumb";
import { DancingScript } from "@/app/ui/fonts";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CourseFetcher from "./CourseFetcher";

const Watch = async (props: { searchParams: Promise<{ courses: string }> }) => {
  const searchParams = await props.searchParams;
  let courseList;
  try {
    courseList = atob(searchParams.courses).split(",");
  } catch (error) {
    redirect("/playground/selectcourse");
  }

  console.log(courseList);

  return (
    <div className="flex flex-col items-center">
      <Breadcrumb
        className="absolute mt-5 -translate-x-52 shadow-md shadow-gray-700"
        breads={[
          { href: "/playground/selectcourse", label: "Selection" },
          { href: "/playground/watch", label: "Watch" },
        ]}
      />
      <form
        className=""
        action={async () => {
          "use server";
          const cookieStore = cookies();
          cookieStore.delete("jwt");
          cookieStore.delete("PHPSESSID");
          cookieStore.delete("csrf_cookie_name");
          redirect("/");
        }}
      >
        <button
          className="absolute mt-5 translate-x-64 rounded-xl bg-rose-600 p-3 px-5 text-white shadow-md shadow-gray-700 transition hover:bg-rose-400 hover:text-rose-700"
          type="submit"
        >
          Log Out
        </button>
      </form>
      <div className="mt-28 flex flex-col items-center rounded-xl bg-gray-500 p-6 px-32">
        <h1
          className={
            DancingScript.className +
            " mb-10 mt-3 h-fit w-fit bg-gradient-to-bl from-cyan-400 via-green-400 to-rose-300 bg-clip-text px-7 text-6xl font-bold text-transparent transition"
          }
        >
          Live Course View
        </h1>

        <CourseFetcher courseList={courseList} />
      </div>
    </div>
  );
};

export default Watch;
