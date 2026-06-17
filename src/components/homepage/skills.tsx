import React from "react";
import Ability from "./ability";
import "./homepage.css";
const Skills: React.FC = () => {
  return (
    <div className="flex justify-center h-auto py-4">
      <div className="contain-content w-4/5">
        <h1 className="text-style-role text-center text-5xl font-bold font-display">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          <Ability imgSource="/images/excel1.png" name="Excel" />
          <Ability imgSource="/images/python.png" name="Python" />
          <Ability imgSource="/images/spss.png" name="SPSS" />
          <Ability imgSource="/images/sql.png" name="SQL" />
          <Ability imgSource="/images/PowerBI.png" name="PowerBI" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
