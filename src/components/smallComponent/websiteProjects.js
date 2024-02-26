import React, { useEffect } from "react";

import dnewsImg from "../images/dnewsImage.png";
import AnnonomousChat from "../images/annonomousChat.png";
import remoteJobImg from "../images/remoteJobImg.png";
import portfolio from "../images/portfolio.png";
import horsecare from "../images/horsecare.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WebsiteProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>

      <div className="flex px-5 lg:p-0 ">
        <h1 className="mb-4 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
            Some Projects
          </span>
          {" In "}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
            Web Development
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-around  max-w-5xl m-auto mt-5 p-4 lg-p-16  ">
        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className="h-fit w-fit m-auto lg:m-0 lg:mb-12 relative rounded-md overflow-hidden bg-gray-800 mb-12"
        >
          {" "}
          <div className="rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400  via-green-400 to-gray-800"></div>
          <div className="rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>
          <div className="relative max-w-sm p-1 rounded-lg shadow">
            <div className="bg-gray-950 rounded-md">
              {" "}
              <img
                className="rounded-t-lg cursor-pointer"
                src={horsecare}
                alt="website_image"
              />
              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                  Horse Care
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  I developed a Horse Care Professional marketplace using React,
                  TypeScript, Shadcn UI, Stripe Payment gateway, Express.js,
                  Auth0, and Supabase database, ensuring a robust platform for
                  seamless services and transactions.
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/DIWAKARKASHYAP/test-assignment"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  <a
                    href="https://test-assignment-i5mu.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className="h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
        >
          <div className="rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-800"></div>
          <div className="rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>

          <div className="relative  max-w-sm p-1 rounded-lg shadow   ">
            <div className="bg-gray-950 rounded-md">
              <img
                className="rounded-t-lg cursor-pointer"
                src={AnnonomousChat}
                alt="website_image"
              />

              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                  Anonymous Chat
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  Our website is designed to provide a secure and anonymous chat
                  platform for two individuals. You can access your chat using a
                  unique chat address, which is generated when you initiate a
                  conversation. However, it's import
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/DIWAKARKASHYAP/AnonymousChat"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  <a
                    href="https://anonymous-chat-pi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className="h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
        >
          <div className="rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-800"></div>
          <div className="rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>

          <div className="relative  max-w-sm p-1   rounded-lg shadow   ">
            <div className="bg-gray-950 rounded-md">
              {" "}
              <img
                className="rounded-t-lg cursor-pointer"
                src={remoteJobImg}
                alt="website_image"
              />
              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                  Blockchain Remote Job
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  Our blockchain remote job platform is built on Next.js,
                  Tailwind CSS, MUI, and Flowbit CSS. Firebase is utilized as
                  the reliable database, ensuring seamless functionality and
                  data management.{" "}
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/DIWAKARKASHYAP/job-portal"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg focus:right-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  <a
                    href="https://www.blockchain-remote-job.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:right-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className="h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
        >
          {" "}
          <div className="rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400  via-green-400 to-gray-800"></div>
          <div className="rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>
          <div className="relative  max-w-sm p-1   rounded-lg shadow   ">
            <div className="bg-gray-950 rounded-md">
              <img
                className="rounded-t-lg cursor-pointer"
                src={portfolio}
                alt="website_image"
              />
              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200 cursor-pointer">
                  This Portfolio
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  This portfolio, crafted with React.js, features seamless
                  animations using the AOS library. Styled with Tailwind CSS and
                  MUI, it offers a visually appealing and interactive platform
                  to showcase creative works and skills..
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/DIWAKARKASHYAP/diwakar-portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  <a
                    href="https://diwakar-portfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteProjects;
