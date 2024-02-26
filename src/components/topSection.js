import React from "react";
import banner from "./images/5927911.gif";

const Section = () => {
    return (
        <div className=" lg:flex flex-row-reverse max-w-full   items-center p-5 sm:p-10 ">
            <div className=" md:w-4/5 m-auto lg:mr-12  bg-pink-600">
                <img
                    id="bannerImg"
                    src={banner}
                    className=" 
                      relative -top-3 -left-4 border-t-4 border-l-2 rounded"
                />
            </div>

            <div className=" max-w-2xl m-auto  relative   lg:pb-10  text-gray-400">
                <div
                    id="text"
                    className=" costomFont2  m-4 pt-10  sm:p-20 lg:p-28 text-xl backdrop-blur"
                >
                    Hi,
                    <br />
                    As a passionate developer, I thrive on acquiring new
                    knowledge. My journey began with web development, and I am
                    now actively engaged in open source contributions, aiding
                    individuals and businesses. Additionally, I am dedicated to
                    mastering advanced concepts in React, continually expanding
                    my skill set.
                </div>
            </div>

            {/* https://wallpaperaccess.com/pixel-art-gif */}
        </div>
    );
};

export default Section;
