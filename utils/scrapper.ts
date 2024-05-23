import { load } from "cheerio";
import { readFileSync } from "fs";

const GetCourseSeats = (crsList: Array<string>) => {
  const $ = load(readFileSync("./public/demo/course.html"));
  const coursesInfo: Array<any> = [];
  let cell, course;
  $("table tbody tr").each((i, el) => {
    cell = $(el).find("td");
    course = cell.eq(0).text();

    if (crsList.includes(course.replaceAll(" ", ""))) {
      coursesInfo.push({
        course,
        section: cell.eq(1).text(),
        seat: cell.eq(2).text(),
      });
    }
  });

  return coursesInfo;
};

export default GetCourseSeats;
