import React from "react";
import banner from "./images/5927911.gif";

const Section = () => {
  return (
    <div className=" lg:flex flex-row-reverse max-w-full items-center p-5 sm:p-10 justify-around gap-3">
      <div className=" md:w-4/5 m-auto lg:mr-12  bg-pink-600">
        <img
          id="bannerImg"
          src={banner}
          className="relative -top-3 -left-4 border-t-4 border-l-2 rounded"
        />
      </div>

      <div className="max-w-2xl m-auto relative">
        <h1 className="m-auto text-3xl font-extrabold md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
            Senior
          </span>
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-sky-400">
            Frontend
          </span>
          {" "}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
            Developer
          </span>
        </h1>
      </div>

      {/* https://wallpaperaccess.com/pixel-art-gif */}
    </div>
  );
};

export default Section;
