import { load } from "cheerio";
import { writeFile } from "node:fs";
import AdvisingClass from "./courseFetcher";
import { cookies } from "next/headers";
import { readFile } from "node:fs/promises";
type CourseDataType = { course: string; section: string; seat: string, faculty: string };

const GetCourseSeats = async (crsList: Array<string>) => {
  const cookieStore = await cookies();

  const PHPSESSID = cookieStore.get("PHPSESSID");
  const csrf_cookie_name = cookieStore.get("csrf_cookie_name");

  if (PHPSESSID === undefined || csrf_cookie_name === undefined)
    throw new Error("No session cookie found. Please log in.");

  const adv = new AdvisingClass({
    phpSessionId: PHPSESSID.value,
    csrf_cookie_name: csrf_cookie_name.value,
    courses: crsList,
  });

  const res = await adv.advisingFetch();
  const $ = load(res);
  const CourseData: CourseDataType[] = [];
  const selector = crsList.map((v, i) => `tr[id^="clist${v}"]`).join(",");


  $(selector).each((index, element) => {
    const $tds = $(element).find("td");

    const courseCodeParts = $tds.eq(0).text().trim().split(".");
    const seatInfo = $tds.eq(1).text().trim();
    const onclickValue = $tds.eq(0).attr('onclick');
    // 

    const facultyInitialsMatch = onclickValue?.match(/'([^']*)'/g);
    const facultyInitials = facultyInitialsMatch ? facultyInitialsMatch[7].replace(/'/g, '') : "---";

    CourseData.push({
      course: courseCodeParts[0],
      seat: seatInfo,
      section: courseCodeParts[1],
      faculty: facultyInitials
    });
  });

  return CourseData;
};

export default GetCourseSeats;
