import React from "react";
import "./homepage.css";
const Activity: React.FC<{
	name: string;
	role: string;
	imgSource: string;
	description: string;
}> = ({ name, role, imgSource, description }) => {
	return (
		<>
			<div className="md:grid md:grid-cols-6 place-items-center gap-4 mb-12">
				<div className="grid justify-center col-span-2 col-start-1 col-end-2 ">
					<img src={imgSource} className="w-25 md:w-50 h-auto" />
				</div>
				<div className="font-display text-white col-start-2 col-end-6">
					<h1 className="text-style-activity font-bold text-style-role text-3xl mt-4">
						{name}
					</h1>
					<h2 className="text-style-activity text-style-role text-2xl mt-4">{role}</h2>

					<p className="font-display mt-2 text-justify text-xl">{description}</p>
				</div>
			</div>
		</>
	);
};

export default Activity;
