import React, { useEffect } from "react";
import {
  frontendSkills,
  backendSkills,
  apis,
  someKnowledge,
} from "./infos/SkillSets";
import MarqueeSkills from "./smallComponent/marqueeSkills";
import { skillsets } from "./infos/MarqueeSkills";
import AOS from "aos";
import "aos/dist/aos.css";


const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className="bg-pink-500 max-w-7xl h-1 rounded-xl m-auto lg:mb-10 mb-8"></div>

            <div>
                <div className="w-full overflow-hidden  content-center grid">
                    <h1 className="title mb-8 m-auto text-3xl font-extrabold md:text-5xl lg:text-6xl text-gray-200 mt-10">
                        {" "}
                        What I Know
                    </h1>
                    <div className="max-w-full m-auto overflow-hidden">
                        {/* marquee 👇 */}
                       <MarqueeSkills skills={skillsets} />

                        <div className="max-w-7xl m-auto sm:flex mt-14">
                            <div
                                data-aos="fade-right"
                                className="sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center border-solid border-pink-500 border-2 rounded-lg relative  bg-gradient-to-br from-white/5 via-pink-100/5 to-pink-300/30"
                            >
                                <div className="sun bg-pink-600 opacity-95 h-11 w-11 rounded-full border-4 border-pink-600 absolute left-0 top-0"></div>
                                <div className="m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    <h2>{frontendSkills.title}</h2>
                                </div>
                                <div>
                                    <ul className="mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400">
                                        {frontendSkills.skills.map(
                                            (item, idx) => (
                                                <li key={idx}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                className="sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-green-500 border-2 rounded-lg relative  bg-gradient-to-bl from-emerald-50/10 via-emerald-100/5 to-emerald-300/30"
                            >
                                <div className="sun2 bg-emerald-500 opacity-95 h-11 w-11 rounded-full absolute right-0 top-0"></div>
                                <div className="m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    <h2>{backendSkills.title}</h2>
                                </div>
                                <div>
                                    <ul className="mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400">
                                        {backendSkills.skills.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-7xl m-auto sm:flex mt-10">
                            <div
                                data-aos="fade-left"
                                className="sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center border-solid border-sky-500 border-2 rounded-lg relative  bg-gradient-to-br from-white/5 via-sky-100/5 to-sky-300/30"
                            >
                                <div className="sun4 bg-sky-400 opacity-95 h-11 w-11 rounded-full  absolute left-0 top-0"></div>
                                <div className="m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    <h2>{apis.title}</h2>
                                </div>
                                <div>
                                    <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                                        {apis.skills.map((item, idx)=> (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                className=" sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-yellow-500 border-2 rounded-lg relative  bg-gradient-to-bl from-white/5 via-yellow-100/5 to-yellow-300/30"
                            >
                                <div className=" sun3 bg-yellow-400 opacity-95 h-11 w-11 rounded-full  absolute right-0 top-0"></div>
                                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                                    <h2>{someKnowledge.title}</h2>
                                </div>
                                <div>
                                    <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                                        {someKnowledge.skills.map((item, idx)=>(
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <MarqueeSkills skills={skillsets} direction="right" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
