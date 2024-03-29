import React from "react";
import { BsGithub, BsTelegram, BsDiscord, BsSkype } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200  h-1 rounded-xl m-auto mt-16 mb-20"></div>

      <footer className="bg-gradient-to-b from-black via-gray-800 to-black">
        <div className="flex">
          <h1 className="mb-4 m-auto text-3xl font-extrabold md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400"></span>{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-600">
              Contact Us
            </span>
          </h1>
        </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className=" max-w-xl m-auto text-center mt-5 max text-slate-600">
            Thanks for your visit{" "}
          </div>
          <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <div className="flex  mt-4 space-x-6 justify-center sm:mt-0 ">
              <a
                href="mailto:oskarmast9436@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500   hover:text-white"
                aria-label="Email Contact"
              >
                <ImMail4 className=" w-10 h-10 lg:w-14 lg:h-14" />
              </a>
              <a
                href="https://github.com/OskarMast"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500   hover:text-white"
                aria-label="Github Connect"
              >
                <BsGithub className="w-10 h-10 lg:w-14 lg:h-14" />
              </a>
              <a
                href="https://t.me/devking9436"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500   hover:text-white"
                aria-label="Telegram Chat"
              >
                <BsTelegram className=" w-10 h-10 lg:w-14 lg:h-14" />
              </a>
              <a
                href="https://discord.com/users/thomas#8877"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500   hover:text-white"
                aria-label="Discord Chat"
              >
                <BsDiscord className=" w-10 h-10 lg:w-14 lg:h-14" />
              </a>
              <a
                href="skype:live:.cid.448fee86149588f6?chat"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500   hover:text-white"
                aria-label="Skype Chat"
              >
                <BsSkype className=" w-10 h-10 lg:w-14 lg:h-14" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
