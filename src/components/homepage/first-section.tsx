import React from "react";
import "./homepage.css";

const Introduction: React.FC = () => {
	return (
		<>
			<div className="grid md:grid-cols-[45%_55%] h-auto">
				<div className="self-center md:pl-24 pl-12 pr-12">
					<h1 className="font-display text-5xl font-bold text-white">Hi, I'm Mahyar.</h1>
					<h2 className="text-style-role font-display text-3xl">Full-Stack Developer.</h2>
					<p className="text-white font-display text-justify text-xl">
						With experience across both front-end and back-end technologies, I turn
						ideas into functional digital solutions. I enjoy solving complex problems,
						learning new tools, and creating smooth user experiences.
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
