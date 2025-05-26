import GetCourseSeats from "@/utils/scrapper";

const POST = async (req: Request) => {
  const { courses }: { courses: Array<string> } = await req.json();

  const data = await GetCourseSeats(courses);


  return new Response(JSON.stringify({ courseinfo: data }));
};

export { POST };
