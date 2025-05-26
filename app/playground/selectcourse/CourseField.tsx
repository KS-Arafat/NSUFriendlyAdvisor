"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import svg_cross from "@/_imgs/cross.svg";
import { Lobster, Roboto, Rubik } from "@/app/ui/fonts";

const CourseField = ({
  className,
  maxCourse,
}: {
  className?: string;
  maxCourse: number;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [addedCourse, setAddedCourse] = useState<Array<string>>([]);

  const CourseAddEvent = (value: string) => {
    if (value.length === 0) return;
    // if (addedCourse.length >= maxCourse) return;
    setAddedCourse([...addedCourse, value]);
  };
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length > 7) return;
      try {
        const response = await fetch("/api/getCrs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ characters: inputValue }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch suggestions");
        }

        const data = await response.json();
        //

        setSuggestions(data.suggestions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [inputValue]);

  const handleInputChange = async (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={className}>
      <div className="w-full">
        <div className="relative">
          <input
            className="row-start-1 row-end-2 max-h-10 w-full gap-0 rounded-md p-2 pr-8 outline-none ring-4 transition-all duration-1000 ease-in-out focus:ring-inset focus:ring-[#89CFF3]"
            type="text"
            id="characterType"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Image
            className="absolute right-2 top-2.5 m-0 h-5 w-5 rotate-45 rounded-full p-0 active:border-4 active:border-blue-400"
            draggable="false"
            src={svg_cross}
            height="20"
            width="20"
            alt=""
            onClick={() => CourseAddEvent(inputValue)}
          />
        </div>
        <div className="h-40 w-full">
          {inputValue.length >= 3 && (
            <div className="grid w-full grid-cols-1 rounded-md bg-slate-300 p-1 text-center">
              <ul className="transition-all duration-500">
                {suggestions.map((suggestion, index) => (
                  <li
                    className="cursor-pointer rounded-md border-b-2 border-cyan-200 pb-1 duration-300 hover:bg-cyan-200 hover:font-bold active:bg-cyan-200 active:font-bold"
                    key={index}
                    onClick={() => CourseAddEvent(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="border-t-2 border-double text-white">
        <p
          className={
            "col-span-2 my-5 text-center text-4xl text-cyan-400 " +
            Rubik.className
          }
        >
          Added Courses
        </p>
        <div className="grid grid-cols-2 place-items-center transition">
          {addedCourse.map((course, index) => (
            <div
              className="flex w-fit items-center py-3 text-xl transition"
              key={index}
              onClick={() =>
                setAddedCourse(addedCourse.filter((c) => c !== course))
              }
            >
              <input
                key={Math.random().toString()}
                value={course}
                type="text"
                readOnly
                name={course}
                className={
                  "mb-3 w-24 cursor-default bg-transparent text-center underline outline-none transition hover:text-rose-300 " +
                  Roboto.className
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseField;
