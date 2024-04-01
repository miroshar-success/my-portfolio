import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Company from "./smallComponent/experience/company";

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>

            <div className="flex px-5 lg:p-0">
                <h1 className="mb-4 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
                        Experience
                    </span>
                    {" In "}
                    <span className="underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
                        Development
                    </span>
                </h1>
            </div>
            <div className="mx-5 sm:mx-20 text-[#9197A1]">
                <Company />
            </div>
        </div>
    );
};

export default Experience;
