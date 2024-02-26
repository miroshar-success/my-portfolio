import React, { useEffect } from "react";
import { rjB1, rjB2, rjB3, rjB4, rjB5, rjB6, rjB7, rjB8, rjB9, rjB10, rjB11, bBanner, bDesign, BLogo, hostinger, rjLogo, sBlockElements, Figma } from "../images/graphics/designPath";

import AOS from "aos";
import "aos/dist/aos.css";

const DesignProject = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>

            <div className=" px-5 flex ">
                <h1 className="mb-4 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
                        Some Projects
                    </span>
                    {" In "}
                    <span className="   underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
                        Graphic Design
                    </span>
                </h1>
            </div>

            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 max-w-7xl m-auto mt-12 p-3 ">
                <div className="grid gap-2 lg:gap-4">
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 "
                            src={Figma}
                            alt=""
                        />
                    </div>

                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB5}
                            alt=""
                        />
                    </div>

                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB2}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-2 lg:gap-4">
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB8}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={bDesign}
                            alt=""
                        />
                    </div>

                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB3}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB6}
                            alt=""
                        />
                    </div>

                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={bBanner}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-2 lg:gap-4">
                    <div>
                        <img
                            data-aos="zoom-in"
                            className=" border border-1 h-auto max-w-full  border-1 rounded-lg"
                            src={rjB1}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={hostinger}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjLogo}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB4}
                            alt=""
                        />
                    </div>

                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB10}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-2 lg:gap-4">
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={BLogo}
                            alt=""
                        />
                    </div>

                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB7}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={sBlockElements}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB9}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            data-aos="zoom-in"
                            className="h-auto max-w-full border border-1 rounded-lg"
                            src={rjB11}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignProject;
