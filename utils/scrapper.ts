import { load } from "cheerio";
import { readFile, writeFile } from "node:fs";
import AdvisingClass from "./courseFetcher";
import { cookies } from "next/headers";

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
  writeFile("./captcha/advising.html", res, (err) => {
    if (err) throw err;
  });
  return;
};

export default GetCourseSeats;
