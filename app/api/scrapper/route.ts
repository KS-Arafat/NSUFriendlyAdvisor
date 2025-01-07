import GetCourseSeats from "@/utils/scrapper";

const POST = async (req: Request) => {
  const { courses }: { courses: Array<string> } = await req.json();
  console.log("Scrapper API POST\n", courses);
  const data = await GetCourseSeats(courses);
  console.log(data);

  return new Response(JSON.stringify({ courseinfo: data }));
};

export { POST };
