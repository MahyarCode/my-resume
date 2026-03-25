import { NavLink } from "react-router-dom";
import React from "react";

const Navigation: React.FC<{ route: string; text: string }> = ({ route, text }) => {
	return (
		<>
			<NavLink
				to={route}
				className={({ isActive }) =>
					isActive ? "p-3 text-center text-blue-600 underline" : "p-3 text-center"
				}
			>
				{text}
			</NavLink>
		</>
	);
};

export default Navigation;
