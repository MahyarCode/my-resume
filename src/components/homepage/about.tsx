import type React from "react";
import "./homepage.css";

const About: React.FC = () => {
  return (
    <div className="flex justify-center h-auto py-4 ">
      <div className="contain-content w-4/5 md:w-3/5">
        <h2 className="text-style-role py-12 font-display text-center font-bold text-5xl">
          About
        </h2>
        <p className="text-justify font-display text-xl text-white">
          Self-taught full-stack developer with one year of intensive,
          project-driven study in modern JavaScript technologies including
          React, Node.js, TypeScript, and PostgreSQL. Holds dual bachelor's
          degrees in Computer Science and Industrial Management, bringing an
          uncommon ability to translate complex business requirements into
          technical solutions. Actively building full-stack applications to
          deepen backend architecture and API design skills, with a growing
          interest in cloud infrastructure and DevOps practices including AWS,
          GCP, and CI/CD pipelines.
        </p>
      </div>
    </div>
  );
};

export default About;
