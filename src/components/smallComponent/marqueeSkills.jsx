import React from "react";

const MarqueeSkills = ({ skills, direction = "left" }) => {
  return (
    <div className="flex gap-7 md:gap-12 bg-gradient-to-t from-black via-slate-700 to-black text-pink-500 ">
      <div
        className={`${
          direction === "left" ? "" : "right-"
        }marquee-group flex shrink-0 items-center justify-around gap-7 md:gap-12 min-w-full`}
      >
        {" "}
        {skills.map(({ name, tag }, idx) => {
          const TagComponent = tag;
          return (
            <div className="marquee-tag-wrapper" key={idx}>
              <div className="flex items-center">
                {" "}
                <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                  <TagComponent className=" h-10 w-10 " />
                </div>
                <span className="marquee-tag ">{name}</span>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div
        aria-hidden="true"
        className={`${
          direction === "left" ? "" : "right-"
        }marquee-group flex shrink-0 items-center justify-around gap-7 md:gap-12 min-w-full`}
      >
        {" "}
        {skills.map(({ name, tag }, idx) => {
          const TagComponent = tag;
          return (
            <div className="marquee-tag-wrapper" key={idx}>
              <div className="flex items-center">
                {" "}
                <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                  <TagComponent className=" h-10 w-10 " />
                </div>
                <span className="marquee-tag ">{name}</span>{" "}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default MarqueeSkills;
