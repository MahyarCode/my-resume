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
					I’m a Full-Stack Developer with a strong focus on backend development, building
					efficient and scalable web applications. With a background in Computer Science
					and Industrial Management, I bring both technical and strategic thinking to my
					work. I’ve developed multiple individual projects that reflect my ability to
					turn ideas into functional products. Driven by a passion for problem-solving,
					I’m always exploring better ways to design, build, and optimize systems.
				</p>
			</div>
		</div>
	);
};

export default About;
