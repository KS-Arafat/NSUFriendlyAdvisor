"use client";

import { useEffect, useState } from "react";
import svg_play from "@/_imgs/play.svg";
import svg_pause from "@/_imgs/pause.svg";
import Image from "next/image";

const CourseFetcher = ({ courseList }: { courseList: Array<string> }) => {
  const [courseInfo, setCourseInfo] = useState<Array<any>>([]);
  const [count, setCount] = useState(0);
  const [isIntervalOn, setIsIntervalOn] = useState(true);
  const [isHidden, setHidden] = useState<boolean>(false);

  const clsname =
      "flex flex-col items-center rounded-lg border border-white bg-gradient-to-br p-4 ",
    clsname2 =
      "mt-10 flex flex-row rounded-lg p-2 text-xl shadow-md  transition hover:scale-105 hover:shadow-lg ";

  const FetchCourseInfo = async () => {
    const data = await fetch("/api/scrapper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courses: courseList }),
      cache: "no-store",
    });

    const { courseinfo }: { courseinfo: Array<any> } = await data.json();
    setCourseInfo(courseinfo);
  };
  const handleToggleInterval = () => {
    setIsIntervalOn((prevIsIntervalOn) => !prevIsIntervalOn);
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    let intervalId: any;

    if (isIntervalOn) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 2000);
    }
    FetchCourseInfo();
    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <div className=" mb-10 flex flex-col items-center">
      <button
        className="mb-5 rounded-lg border p-3 text-xl font-extrabold text-white"
        onClick={() => setHidden(!isHidden)}
      >
        {isHidden ? "Show" : "Hide"}
      </button>
      <div className="grid grid-cols-5 gap-4 ">
        {courseInfo &&
          courseInfo.map(
            (e: { course: string; section: string; seat: string, faculty: string }) => {
              try {
                const regex = /(\d+)\((\d+)\)/;
                const match = e.seat.match(regex);
                if (match == null) throw new Error();
                const a = parseInt(match[0]);
                const b = parseInt(match[2]);
                return (
                  <div
                    className={
                      a - b == 0
                        ? clsname +
                          ` from-rose-400 via-red-300 to-amber-300 shadow-lg shadow-red-200 ${isHidden ? "hidden" : ""}`
                        : clsname +
                          " from-green-400 via-lime-300 to-emerald-200 shadow-lg shadow-emerald-200"
                    }
                    key={Math.random()}
                  >
                    <p key={Math.random()} className="text-lg font-bold">
                      {e.course}
                    </p>
                    <p key={Math.random()}>Seat: {b - a}</p>
                    <p key={Math.random()}>Section: {e.section}</p>
                    <p key={Math.random()}>{ e.faculty}</p>
                  </div>
                );
              } catch (e) {
                return (
                  <div
                    className={
                      clsname +
                      " from-rose-400 via-red-300 to-amber-300 shadow-lg shadow-red-200"
                    }
                    key={Math.random()}
                  >
                    Error
                  </div>
                );
              }
            },
          )}
      </div>
      <button
        className={
          isIntervalOn
            ? clsname2 +
              " bg-rose-400 shadow-red-400 hover:bg-rose-400  hover:shadow-rose-200"
            : clsname2 +
              " bg-green-400 shadow-green-400 hover:bg-emerald-400  hover:shadow-green-200"
        }
        onClick={handleToggleInterval}
      >
        <Image
          src={isIntervalOn ? svg_pause : svg_play}
          width={25}
          height={25}
          alt=""
        />
        <span>{isIntervalOn ? " Turn Off" : " Turn On"}</span>
      </button>
      <div className="from-green-400 via-lime-300 to-emerald-200"></div>
      <div className="from-rose-400 via-red-300 to-amber-300"></div>
    </div>
  );
};

export default CourseFetcher;
