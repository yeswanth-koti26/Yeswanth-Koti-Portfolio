import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Cloud Technology",
			"Cloud Solutions",
			"Business Cloud Benefits",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 20px;
					gap: 20px;
					font-size: 18px;
					line-height: 1.6;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
					border-radius: 8px;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Cloud computing has revolutionized the way businesses operate by providing on-demand access to computing resources without heavy upfront investments. Companies can scale their infrastructure based on demand, ensuring they only pay for what they use, leading to significant cost savings. Moreover, cloud services offer global accessibility, enabling teams to collaborate seamlessly from any part of the world.
					</div>
					<div className="paragraph">
						Another major advantage of cloud computing is enhanced security and disaster recovery. Cloud providers implement top-tier security protocols and backup systems to protect critical data. Businesses also benefit from increased agility, as they can quickly deploy new services and innovations without being tied to rigid hardware limitations. Ultimately, cloud computing empowers organizations to focus on growth, innovation, and customer satisfaction while reducing operational complexity.
					</div>
					<img
						src="https://images.unsplash.com/photo-1531403009286-04851f1a2a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
						alt="Cloud Computing"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Healthcare AI",
			"AI Medical Innovations",
			"AI in Medicine",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 20px;
					gap: 20px;
					font-size: 18px;
					line-height: 1.6;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
					border-radius: 8px;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Artificial Intelligence (AI) is redefining healthcare by introducing new capabilities for diagnostics, patient care, and administrative efficiency. Machine learning algorithms analyze complex medical data faster and more accurately than ever before, assisting doctors in detecting diseases at earlier stages. AI-powered imaging tools, predictive analytics, and virtual health assistants are improving patient outcomes and personalizing treatments.
					</div>
					<div className="paragraph">
						Beyond clinical applications, AI is optimizing healthcare operations by automating administrative tasks such as billing, scheduling, and patient record management. Hospitals and clinics are leveraging AI-driven insights to allocate resources more effectively and enhance patient experiences. As the technology matures, AI promises to make healthcare more accessible, affordable, and responsive to the needs of a rapidly changing world.
					</div>
					<img
						src="https://images.unsplash.com/photo-1588776814546-1ffcf47267d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
						alt="AI in Healthcare"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;


