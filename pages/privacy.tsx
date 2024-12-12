import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

import PrivacyContent from "../components/footer/privacy-content";

export default function Privacy({}: any) {
	return (
		<>
			<DefaultHeaderAndBody>
				<div className="content">
					<PrivacyContent/>
				</div>
			</DefaultHeaderAndBody>

			<FooterBottom/>
		</>
	);
}
