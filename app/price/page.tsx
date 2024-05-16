import Image from "next/image";
import svg_cross from "@/_imgs/cross.svg";
import Link from "next/link";

const Rightsign = () => (
  <svg
    className="mr-2 h-6 w-6 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);
const Price = () => {
  return (
    <main className="flex h-[100dvh] flex-col bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-3 text-center">
          <div className="col-start-2">
            <h2 className="bg-gradient-to-br from-[#72bcff] via-[#acd6ff] to-[#ffb788] bg-clip-text p-2 text-4xl font-extrabold text-transparent hover:bg-gradient-to-tr sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="mt-4 bg-gradient-to-br from-[#7989d0] via-[#b6c2f5] to-[#d5abb7] bg-clip-text text-xl text-transparent">
              Simple, transparent pricing for your Advising needs.
            </p>
          </div>
          <div className="flex flex-col items-end justify-start">
            <Link
              href={"/"}
              className="group mr-12 translate-x-3/4 opacity-50 transition-opacity hover:opacity-100 "
            >
              <Image
                src={svg_cross}
                className="rounded-full transition group-hover:bg-rose-300"
                alt=""
                width={50}
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group transform rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-[#ffb76f]">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white group-hover:text-[#ffb76f]">
                Free
              </h3>
              <p className="mt-4 text-gray-400">
                Get started with our basic features.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white transition group-hover:text-[#ffb76f]">
                ৳0
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <Rightsign />
                <span>2 Courses Live Update</span>
              </li>
              <li className="flex items-center">
                <Rightsign />
                <span>1 Course Auto Save</span>
              </li>
              <li className="flex items-center">
                <Rightsign />
                <span>Low Priority Queue</span>
              </li>
            </ul>
            <Link
              href="/signup"
              className="block w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-center font-medium text-white hover:from-blue-600 hover:to-purple-600"
            >
              Sign Up
            </Link>
          </div>

          <div className="group transform rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-[#d7d7d7]">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white transition group-hover:text-[#dbdbdb]">
                Starter
              </h3>
              <p className="mt-4 text-gray-400">Perfect for First Time User.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white transition group-hover:text-[#b4b4b4]">
                ৳50
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <Rightsign />
                <span>5 Courses Live Update</span>
              </li>
              <li className="flex items-center">
                <Rightsign />
                <span>3 Courses Auto Save</span>
              </li>
              <li className="flex items-center">
                <Rightsign />
                <span>Medium Priority Queue</span>
              </li>
            </ul>
            <Link
              href="#"
              className="block w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-center font-medium text-white hover:from-blue-600 hover:to-purple-600"
            >
              Get Started
            </Link>
          </div>

          <div className="group transform rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-[#ffe771]">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white transition duration-300 group-hover:text-[#ffe979]">
                Pro
              </h3>
              <p className="mt-4 text-gray-400">Ideal for Every Stduents.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white transition duration-300 group-hover:text-[#ffe979]">
                ৳100
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <Rightsign />
                <span>6 Courses Live Update</span>
              </li>
              <li className="flex items-center">
                <Rightsign />
                <span>4 Courses Auto Save</span>
              </li>
              <li className="flex items-center">
                <Rightsign />
                <span>High Priority Queue</span>
              </li>
            </ul>
            <Link
              href="#"
              className="block w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-center font-medium text-white hover:from-blue-600 hover:to-purple-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Price;
