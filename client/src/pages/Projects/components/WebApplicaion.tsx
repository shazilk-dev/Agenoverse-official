// type TWebApplication = {
//     title:string;
//     description:string;
//     image:string;
// }
// const datas:TWebApplication[]=[
//     {
//         title:"Hello World",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello Dunya",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello World",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello Dunya",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello World",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello Dunya",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello World",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello Dunya",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello World",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
//     {
//         title:"Hello Dunya",
//         description:" Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//         image:"../../../public/portrait_temp.png"
//     },
// ]
// const WebApplicaion = () => {
//   return (
//     <div className="grid grid-cols-2 gap-y-10">
//     {datas.map((data,index)=>(

//       <div
//         key={index}
//         className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 group"
//       >
//         <img
//           className="object-contain w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
//           src={data.image}
//           alt=""
//         />
//         <div className="flex flex-col justify-between p-4 leading-normal">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {data.title}
//           </h5>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             {data.description}
//           </p>
//           <button type="button" className="text-white w-24 bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 dark:group-hover:bg-gray-800">View</button>

//         </div>
//       </div>
//   ))}
//   </div>
//   );
// };

// export default WebApplicaion;









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

const WebApplication = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? datas : datas.slice(0, 6);

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl text-center font-extrabold uppercase dark:text-stone-200">Web Application Projects</h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {visibleCards.map((data, index) => {
          const isFaded = !showAll && index >= 4; // apply opacity only for index 4 and 5
          return (
            <div
              key={index}
              className={`flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 group transition duration-300 ${
                isFaded ? "opacity-0 h-0 overflow-hidden" : ""
              }`}
            >
              <img
                className="object-contain w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={data.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <button
                  type="button"
                  className="text-white w-24 bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 dark:group-hover:bg-gray-800"
                >
                  View
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

export default WebApplication;
