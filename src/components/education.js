import React from "react";
const Education = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200  h-1 rounded-xl m-auto mt-16 mb-20"></div>

      <div className="flex px-5 lg:p-0">
        <h1 className="mb-4 m-auto text-3xl font-extrabold md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
            Education
          </span>
        </h1>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-400">
          {" "}
          Bachelor of Computer Science
        </h2>
        <div className="flex flex-col gap-4 mt-4 ml-4">
          <div>
            <span className="font-bold text-lg text-gray-400">University:</span>{" "}
            EPFL - Swiss Federal Institute of Technology
          </div>
          <div className=" ">
            <span className="font-bold text-lg text-gray-400">Location :</span>{" "}
            Switzerland
          </div>
          <div>
            <span className="font-bold text-lg text-gray-400">Duration :</span>{" "}
            2013.5 - 2016.5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
