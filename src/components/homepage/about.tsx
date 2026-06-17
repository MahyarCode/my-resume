import type React from "react";
import "./homepage.css";

const About: React.FC = () => {
  return (
    <div className="flex justify-center h-auto py-4 ">
      <div className="contain-content w-4/5 md:w-3/5">
        <h2 className="text-style-role py-12 font-display text-center font-bold text-5xl">
          About
        </h2>
        <div className="text-justify font-display text-xl text-white">
          <p>
            I am an industrial-management graduate who specialises in
            data-driven decision-making. My foundation is quantitative, built on
            operations research, statistics, and feasibility analysis, and what
            I care about is the point where analysis turns into a decision: not
            a chart for its own sake, but a clear answer to what an organisation
            should do and why. In practice that means working across the whole
            path from raw data to conclusion. I clean and validate datasets,
            choose the statistical test the data actually calls for rather than
            the convenient one, and build forecasting models when the question
            is about what comes next.
          </p>

          <p className="mt-8">
            Operations research is the part of my training I rely on most,
            because it gives me a way to take a real business or policy problem,
            frame it precisely, and turn it into a mathematical model that can
            be solved and tested against evidence. What ties this together is a
            systems-level habit of thought: reasoning about how the parts of a
            complex problem connect, weighing costs against returns, and
            following an analysis through to a recommendation I can defend under
            scrutiny. I am as comfortable telling an organisation that an idea
            is not worth pursuing as I am supporting one that is, because the
            value of the work is an honest answer, not a flattering one.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
