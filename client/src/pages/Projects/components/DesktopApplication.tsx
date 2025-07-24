import { useState } from "react";

type TWebApplication = {
  title: string;
  description: string;
  image: string;
};

const datas: TWebApplication[] = [
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "../../../public/portrait_temp.png",
  },
];

const DesktopApplication = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? datas : datas.slice(0, 6);

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl font-extrabold uppercase dark:text-stone-200">
        Desktop Application Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {visibleCards.map((data, index) => {
          const isFaded = !showAll && index >= 4; // apply opacity only for index 4 and 5
          return (
            <div
              key={index}
              className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ${
                isFaded ? "opacity-0 h-0 overflow-hidden" : ""
              } ${
                (datas.length % 4 === 2 && index == datas.length - 2 && innerWidth > 1023)
                  ? "col-start-1"
                  : ""
              } ${
                (datas.length % 4 === 2 && index == datas.length - 2 && innerWidth > 1023)
                  ? "col-start-2"
                  : ""
              }`}
            >
              <a href="#">
                <img
                  className="rounded-t-lg h-44 w-full object-cover"
                  src={data.image}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg  me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 px-6 py-2 rounded-md transition"
        >
          See More
        </button>
      )}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 px-6 py-2 rounded-md transition"
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default DesktopApplication;
