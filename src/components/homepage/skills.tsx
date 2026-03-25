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
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
					<Ability imgSource="/my-resume/images/nodejs.png" name="NodeJS" />
					<Ability imgSource="/my-resume/images/react.png" name="React" />
					<Ability imgSource="/my-resume/images/Express.png" name="Express JS" />
					<Ability imgSource="/my-resume/images/postgre.png" name="PostgreSQL" />
					<Ability imgSource="/my-resume/images/MongoDB.png" name="MongoDB" />
					<Ability imgSource="/my-resume/images/js.png" name="Javascript" />
					<Ability imgSource="/my-resume/images/typescript.png" name="Typescript" />
					<Ability imgSource="/my-resume/images/html.png" name="HTML" />
					<Ability imgSource="/my-resume/images/css.png" name="CSS" />
					<Ability imgSource="/my-resume/images/prisma.png" name="Prisma" />
					<Ability imgSource="/my-resume/images/Tailwind CSS.png" name="Tailwind CSS" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
