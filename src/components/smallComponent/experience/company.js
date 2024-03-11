import React from "react";
import { experiences } from "../../infos/Experiences";

const Company = () => {
  return (
    <>
      {/* Experience list */}
      {experiences.map(({company, role, location, duration, tech_stack, responsibilities}, idx) => (
        <div className=" " key={`experience-${idx}`}>
          <div className=" mt-10">
            <h3 className=" text-3xl font-bold text-gray-400">
              {" "}
              {company}
            </h3>
            <div className=" flex flex-col gap-4 mt-4 ml-4">
              <div>
                <span className="font-bold text-lg text-gray-400">
                  Role:
                </span>{" "}
                {role}
              </div>
              <div className=" ">
                <span className="font-bold text-lg text-gray-400">
                  Location :
                </span>{" "}
                {location}
              </div>
              <div>
                <span className="font-bold text-lg text-gray-400">
                  Duration :
                </span>{" "}
                {duration}
              </div>
              <div>
                <span className="font-bold text-lg text-gray-400">
                  Tech Stack :
                </span>{" "}
                {tech_stack.map(({name, bg_color, text_color}, idk)=>(
                  <span key={`tech-stack-${idk}`} class={`text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-${bg_color}-900 text-${text_color}-400 border border-${text_color}-400`}>
                  {name}
                  </span>
                ))}
              </div>
              <div>
                <h4 className=" font-bold text-lg text-gray-400">
                  Responsibilities and Achievements
                </h4>
                <p>
                  <ul className=" list-disc p-5 pt-2">
                    {responsibilities.map((item, rid) => (
                      <li key={`responsibilities-${rid}`}>
                      {item}{" "}
                    </li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Company;
