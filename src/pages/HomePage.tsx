import type React from "react";
import Introduction from "../components/homepage/first-section";
import About from "../components/homepage/about";
import Education from "../components/homepage/Education";
import Skills from "../components/homepage/skills";
import "./HomePage.css";
import Header from "../components/Header";

const HomePage: React.FC = () => {
	return (
		<>
			<main>
				<section id="summary" className="introduction ">
					<Header />
					<Introduction />
				</section>
				<div className="fade"></div>
				<section id="about" className="homepage">
					<About />
				</section>
				<section id="Education" className="homepage">
					<Education />
				</section>
				<section id="skills" className="homepage">
					<Skills />
				</section>
			</main>
		</>
	);
};

export default HomePage;
