import React from "react";
import { experiences } from "../../infos/Experiences";

const Company = () => {
  return (
    <>
      {/* Experience list */}
      {experiences.map(
        (
          { company, role, location, duration, tech_stack, responsibilities },
          idx
        ) => (
          <div className=" " key={`experience-${idx}`}>
            <div className=" mt-10">
              <h2 className=" text-3xl font-bold text-gray-400"> {company}</h2>
              <div className=" flex flex-col gap-4 mt-4 ml-4">
                <div>
                  <h3>
                    <span className="font-bold text-lg text-gray-400">
                      Role:
                    </span>{" "}
                  </h3>
                  {role}
                </div>
                <div className=" ">
                  <h3>
                    <span className="font-bold text-lg text-gray-400">
                      Location :
                    </span>{" "}
                  </h3>
                  {location}
                </div>
                <div>
                  <h3>
                    <span className="font-bold text-lg text-gray-400">
                      Duration :
                    </span>{" "}
                  </h3>
                  {duration}
                </div>
                <div>
                  <h3>
                    <span className="font-bold text-lg text-gray-400">
                      Tech Stack :
                    </span>{" "}
                  </h3>
                  {tech_stack.map(({ name, bg_color, text_color }, idk) => (
                    <span
                      key={`tech-stack-${idk}`}
                      className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-400 border border-1 border-blue-400`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className=" font-bold text-lg text-gray-400">
                    Responsibilities and Achievements
                  </h3>
                  <ul className=" list-disc p-5 pt-2">
                    {responsibilities.map((item, rid) => (
                      <li key={`responsibilities-${rid}`}>{item} </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Company;
