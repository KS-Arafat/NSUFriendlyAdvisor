import { load } from "cheerio";
import { writeFile } from "node:fs";
import AdvisingClass from "./courseFetcher";
import { cookies } from "next/headers";
import { readFile } from "node:fs/promises";
type CourseDataType = { course: string; section: string; seat: string };

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
  console.log(selector);

  $(selector).each((index, element) => {
    const firstTd = $(element).find("td").eq(0).text().trim().split(".");
    const secondTd = $(element).find("td").eq(1).text().trim();
    CourseData.push({
      course: firstTd[0],
      seat: secondTd,
      section: firstTd[1],
    });
  });

  console.log(CourseData);
  return CourseData;
};

export default GetCourseSeats;
