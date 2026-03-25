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
					role="Industrial Management Student"
					imgSource="/images/uni.png"
					description="Dedicated Industrial Management student concentrating on the intersection of Supply Chain Logistics and Strategic Management. Demonstrates academic proficiency in supply chain optimization, demand forecasting, strategic decision-making and strategic models for problem solving. Skilled in identifying inefficiencies within the value chain and implementing sustainable, competitive strategies. Combines quantitative problem-solving with strategic foresight to support operational excellence and business growth."
				/>
				<Activity
					name="University of Tehran"
					role="Computer Science Student"
					imgSource="/images/uni.png"
					description="Computer Science student dedicated to full-stack development, with a focus on building robust, scalable applications. Emphasizes clean architecture, performance optimization, and thoughtful user experience across the development lifecycle."
				/>
			</div>
		</div>
	);
};

export default Education;
