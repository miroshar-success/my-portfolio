import React, { useEffect } from "react";

import swimming from "../images/swimming.png";
import hotelRoomBookingSystem from "../images/hotel-room-booking-system.png";
import flyingCarpet from "../images/flying-carpet.png";
import bullionbrother from "../images/bullionbrother.png";
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
                src={swimming}
                alt="website_image"
              />
              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                  Swimming School Management
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  I developed a Swimming School Management Website using React,
                  TypeScript, Material UI, Scaffholhub ,Stripe Payment gateway, Express.js,
                  Auth_JWT, and MongoDB, ensuring a robust platform for
                  seamless services and transactions.
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/OskarMast/swimming-school-management"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  {/* <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a> */}
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
                src={hotelRoomBookingSystem}
                alt="website_image"
              />

              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                  Hotel Room Booking System
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  As a full stack developer. I developed a Swimming School Management Website using React,
                  TypeScript, Node.js, Express.js, MongoDB, Redux.js, Ant Design, TailwindCSS, and Next.js from Figma Design.{" "}
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/OskarMast/hotel-room-booking-system"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  {/* <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a> */}
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
                src={flyingCarpet}
                alt="website_image"
              />
              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                  Flying Carpet Inbox
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                As a full stack developer, I successfully engineered a comprehensive WhatsApp inbox utilizing a sophisticated tech stack comprising React for dynamic front-end rendering, Node.js and Express.js, MongoDB and WhatsApp API for real-time messaging.{" "}
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/OskarMast/flying-carpet-inbox"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg focus:right-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  {/* <a
                    href="https://www.blockchain-remote-job.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:right-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a> */}
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
                src={bullionbrother}
                alt="website_image"
              />
              <div className="p-5">
                <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200 cursor-pointer">
                  BullionBrother
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                As an integral part of my work as a full-stack developer, I integrated electronic payment methods, including Payoneer, PayPal, e-check, and cryptocurrency with pre-authorization, for an e-commerce site where marketing plays a crucial role.
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/OskarMast/bullionbrother"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a>
                  {/* <a
                    href="https://Oskar-portfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="buttonAnimation  inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className="buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a> */}
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
