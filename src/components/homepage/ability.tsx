import React from "react";

const ability: React.FC<{ imgSource: string; name: string }> = ({ imgSource, name }) => {
	return (
		<>
			<div className="grid justify-items-center mt-8">
				<img src={imgSource} className="w-20 h-auto mb-4" />
				<h1 className="text-white font-bold font-display text-center text-1xl">{name}</h1>
			</div>
		</>
	);
};

export default ability;
