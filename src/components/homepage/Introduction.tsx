import React from "react";
import "./homepage.css";

const Introduction: React.FC = () => {
  return (
    <>
      <div className="grid md:grid-cols-[45%_55%] h-auto">
        <div className="self-center md:pl-24 pl-12 pr-12">
          <h1 className="font-display text-5xl font-bold text-white">
            Hi, I'm Mahyar.
          </h1>
          <h2 className="text-style-role font-display text-3xl">
            Business Analyst & Data Analyst
          </h2>
          <p className="text-white font-display text-justify text-xl">
            I turn disorganised data into decisions an organisation can act on,
            then build the tools that make those decisions repeatable and
            transparent. An industrial-management graduate grounded in
            operations research and statistics, with the software engineering to
            carry an idea from raw data all the way to a working system.
          </p>
        </div>
        <div className="grid justify-items-center">
          <img
            src="/images/mahyar.png"
            className="image-container p-5 mt-4 md:mt-0 md:w-100 h-auto rounded-[6vw]  
						"
          />
        </div>
      </div>
    </>
  );
};
export default Introduction;
