import React from "react";
import Activity from "./activity";

const Experience: React.FC = () => {
  return (
    <div className="flex justify-center h-auto py-4">
      <div className="contain-content w-5/6 md:w-4/5">
        <h1 className="text-style-role text-5xl font-bold font-display text-center p-12">
          Experience
        </h1>
        <Activity
          name="Digital Nexus"
          type="experience"
          role="Software Development Intern"
          imgSource="/images/DigitalNexus.png"
          description={[
            "Increased backend test coverage by 40% by writing unit and integration tests for Express.js API routes, reducing untested code paths and improving overall codebase reliability.",
            "Increased frontend test coverage by 35% across the React application.",
            "Designed and implemented a custom React Context API solution that eliminated redundant prop drilling across the component tree, reducing unnecessary component re-renders by 15% and improving rendering performance. ",
            "Developed new user-facing features for the main application dashboard, contributing to an active production codebase with real end-user impact. ",
            "Refactored an existing React codebase by decomposing monolithic components into reusable, single-responsibility modules, improving maintainability and reducing duplication across the frontend.",
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;
