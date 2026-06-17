import type React from "react";
import Activity from "./activity";
import "./homepage.css";

const Education: React.FC = () => {
  return (
    <div className="flex justify-center h-auto py-4">
      <div className="contain-content w-5/6 md:w-4/5">
        <h1 className="text-style-role text-5xl font-bold font-display text-center p-12">
          Education
        </h1>
        <Activity
          name="University of Tehran"
          role="Bachelor's Degree, Industrial Management"
          type="education"
          imgSource="/images/uni.png"
          datePeriod="September 2020 - July 2024"
          description="Bachelor of Industrial Management from the University of Tehran, graduated in 2024 with a 3.9/4.0 GPA, built on a quantitative core of statistics, operations research, and feasibility analysis.

My coursework trained me to take a real management problem, frame it precisely, and turn it into a mathematical model that can be solved and tested against data, spanning optimization and linear programming, production and operations management, and statistical decision-making.

The through-line was always the same: not analysis for its own sake, but turning evidence into decisions an organization can act on."
        />
      </div>
    </div>
  );
};

export default Education;
