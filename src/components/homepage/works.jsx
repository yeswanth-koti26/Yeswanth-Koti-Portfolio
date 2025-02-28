import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./calsatela.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">California State University, Los Angeles</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Dec 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./minvest.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Minvest Finance</div>
							<div className="work-subtitle">
								Software Developer Intern
							</div>
							<div className="work-duration">June 2024 - Dec 2024</div>
						</div>
						<div className="work">
							<img
								src="./LTIMindtree.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">LTIMindtree</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">AUG 2022 - July 2023</div>
						</div>
						<div className="work">
							<img
								src="./strydo.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Strydo Technologies</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">June 2020 - July 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
