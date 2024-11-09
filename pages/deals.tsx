import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

import ProjectsTiled from "../components/projects/ProjectsTiled";

export default function Deals({}: any) {
	return (
		<>
			<DefaultHeaderAndBody>
				<div className="deals">
					<ProjectsTiled />
				</div>
			</DefaultHeaderAndBody>

			<FooterBottom />
		</>
	);
}
