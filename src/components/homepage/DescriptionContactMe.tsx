import React from "react";

const DescriptionContactMe: React.FC = () => {
	return (
		<div className="grid self-center">
			<div className="px-8">
				<h1 className="text-4xl">Contact Me Here!</h1>
				<div className="flex justify-start mt-4">
					<div>
						<h2>Hello</h2>
						<a href="https://github.com/MahyarCode">
							<img src="/svg/githubIcon.svg" className="w-10 h-10" />
						</a>
					</div>
					<div className="">
						<a href="https://www.linkedin.com/in/mahyar-mousavinia">
							<img src="/svg/linkedin.svg" className="w-15 h-10" />
						</a>
					</div>
					<div className="">
						<a href="mailto:mahyar.mousavi.1408@gmail.com">
							<img src="/svg/gmail.svg" className="w-10 h-10" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DescriptionContactMe;
