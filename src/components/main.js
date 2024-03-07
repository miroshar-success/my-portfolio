import React, { useEffect } from "react";
import {
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiReact,
    DiNodejsSmall,
} from "react-icons/di";
import {
    SiNextdotjs,
    SiNodedotjs,
    SiCodeigniter,
    SiCanva,
    SiSolidity,
    SiEthereum,
} from "react-icons/si";
import { FaHardHat, FaGithub, FaLaravel, FaWordpress } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className=" bg-pink-500 max-w-7xl h-1 rounded-xl m-auto lg:mb-10 mb-8"></div>

            <div>
                <div className=" w-full overflow-hidden  content-center grid  ">
                    <h2 className="title mb-8 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl  text-gray-200  mt-10 ">
                        {" "}
                        What I Know
                    </h2>
                    <div className=" max-w-full  m-auto overflow-hidden    ">
                        {/* marquee 👇 */}
                        <div className=" flex gap-7 md:gap-12   bg-gradient-to-t from-black via-slate-700 to-black text-pink-500 ">
                            <div className="marquee-group flex shrink-0 items-center justify-around gap-7 md:gap-12 min-w-full">
                                {" "}
                                <div className="marquee-tag-wrapper ">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiHtml5 className=" h-10 w-10 " />
                                        </div>
                                        <span className="marquee-tag ">
                                            HTML
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiCss3 className="h-10 w-10 " />
                                        </div>
                                        <span className="marquee-tag">CSS</span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiJavascript className="h-10 w-10 " />
                                        </div>
                                        <span className="marquee-tag">
                                            Javascript
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiReact className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            React.js
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <SiNextdotjs className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Next.js
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <SiNodedotjs className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Node.js
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <FaLaravel className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Laravel
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <SiCodeigniter className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Codegniter
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <FaWordpress className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Wordpress
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <FaGithub className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            github
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                            </div>
                            <div
                                aria-hidden="true"
                                className="marquee-group flex shrink-0 items-center justify-around gap-7 md:gap-12 min-w-full"
                            >
                                {" "}
                                <div className="marquee-tag-wrapper  ">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiHtml5 className="h-10 w-10 " />
                                        </div>
                                        <span className=" marquee-tag">
                                            HTML
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiCss3 className="h-10 w-10 " />
                                        </div>
                                        <span className="marquee-tag">CSS</span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiJavascript className="h-10 w-10 " />
                                        </div>
                                        <span className="marquee-tag">
                                            Javascript
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <DiReact className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            React.js
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <SiNextdotjs className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Next.js
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <SiNodedotjs className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Node.js
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <FaLaravel className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Laravel
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <SiCodeigniter className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Codegniter
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <FaWordpress className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            Wordpress
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                                <div className="marquee-tag-wrapper">
                                    <div className="flex items-center">
                                        {" "}
                                        <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                                            <FaGithub className="h-10 w-10" />
                                        </div>
                                        <span className="marquee-tag">
                                            github
                                        </span>{" "}
                                    </div>
                                </div>{" "}
                            </div>
                        </div>

                        <div className=" max-w-7xl m-auto sm:flex  mt-14  ">
                            <div
                                data-aos="fade-right"
                                className="   sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col  items-center  border-solid border-pink-500 border-2 rounded-lg relative  bg-gradient-to-br from-white/5 via-pink-100/5 to-pink-300/30"
                            >
                                <div className=" sun bg-pink-600 opacity-95 h-11 w-11 rounded-full border-4 border-pink-600 absolute left-0 top-0"></div>
                                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    In frontend
                                </div>
                                <div>
                                    <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                        <li>Bootstrap</li>
                                        <li>Tailwind css</li>
                                        <li>MUI</li>
                                        <li>React.js</li>
                                        <li>Next.js</li>
                                    </ul>
                                </div>
                            </div>

                            {/* <div data-aos="fade-left" className="w-1/2 flex flex-col items-center"> */}
                            <div
                                data-aos="fade-left"
                                className=" sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-green-500 border-2 rounded-lg relative  bg-gradient-to-bl from-emerald-50/10 via-emerald-100/5 to-emerald-300/30"
                            >
                                <div className=" sun2 bg-emerald-500 opacity-95 h-11 w-11 rounded-full absolute right-0 top-0"></div>
                                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    In Backend
                                </div>
                                <div>
                                    <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>PHP</li>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>MSSQL</li>
                                        <li>PostgreSQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className=" max-w-7xl m-auto sm:flex  mt-10  ">
                            <div
                                data-aos="fade-left"
                                className=" sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-sky-500 border-2 rounded-lg relative  bg-gradient-to-br from-white/5 via-sky-100/5 to-sky-300/30"
                            >
                                <div className=" sun4 bg-sky-400 opacity-95 h-11 w-11 rounded-full  absolute left-0 top-0"></div>
                                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    In API
                                </div>
                                <div>
                                    <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                                        <li>Whatsapp API</li>
                                        <li>PayPal API</li>
                                        <li>Authorize.Net API</li>
                                        <li>Stripe API</li>
                                        <li>SendGrid API</li>
                                        <li>RESTful API</li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                className=" sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-yellow-500 border-2 rounded-lg relative  bg-gradient-to-bl from-white/5 via-yellow-100/5 to-yellow-300/30"
                            >
                                <div className=" sun3 bg-yellow-400 opacity-95 h-11 w-11 rounded-full  absolute right-0 top-0"></div>
                                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    some Knowledge
                                </div>
                                <div>
                                    <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                                        <li>Git</li>
                                        <li>Docker</li>
                                        <li>CI/CD</li>
                                        <li>XDdesign</li>
                                        <li>Figma</li>
                                        <li>Web socket</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
