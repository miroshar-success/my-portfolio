import React from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>

            <footer className="bg-gradient-to-b from-black via-gray-800 to-black ">
                <div className="  flex ">
                    <h1 className="mb-4 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400"></span>{" "}
                        <span className="   underline underline-offset-3 decoration-8  decoration-blue-600">
                            Contact Us
                        </span>
                    </h1>
                </div>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                                    Blogs
                                </h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://dev.to/diwakarkashyap"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:underline"
                                        >
                                            Dev.to
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://diwakarkashyap.hashnode.dev/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:underline"
                                        >
                                            HashNode
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                                    Follow us
                                </h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://github.com/DIWAKARKASHYAP"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:underline "
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/Diwakar_766"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:underline"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                                    Legal
                                </h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" max-w-xl m-auto text-center mt-5 max text-slate-600">
                        I built this entire website from scratch, all by myself{" "}
                    </div>
                    <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="flex items-center justify-center">
                        <div className="flex  mt-4 space-x-6 justify-center sm:mt-0 ">
                            <a
                                href="https://www.linkedin.com/in/diwakar-kashyap-317a5223b/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500  hover:text-white"
                            >
                                <BsLinkedin className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="mailto:diwakarkashyapdev@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500   hover:text-white"
                            >
                                <ImMail4 className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://github.com/DIWAKARKASHYAP"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500   hover:text-white"
                            >
                                <BsGithub className="w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://t.me/didk9675"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500   hover:text-white"
                            >
                                <BsTelegram className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://twitter.com/Diwakar_766"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500   hover:text-white"
                            >
                                <FaTwitterSquare className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
