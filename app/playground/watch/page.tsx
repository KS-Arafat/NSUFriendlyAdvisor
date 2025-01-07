import Breadcrumb from "@/app/ui/breadcrumb";
import { DancingScript } from "@/app/ui/fonts";
import { redirect } from "next/navigation";
import CourseFetcher from "./CourseFetcher";
import Logout from "@/app/ui/Logout";

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
      <div className="container flex flex-row items-center justify-around">
        <Breadcrumb
          className="mt-5 shadow-md shadow-gray-700"
          breads={[
            { href: "/playground/selectcourse", label: "Selection" },
            { href: "/playground/watch", label: "Watch" },
          ]}
        />
        <Logout />
      </div>
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
