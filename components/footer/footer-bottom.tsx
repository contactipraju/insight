import ContactDetails from "./contact-details";
import SocialMediaLinks from "./social-media-links";
import JoinNewsLetter from "./join-news-letter";
import CopyrightDetails from "./copyright-details";
import LogoBlack from "../logo-white";

export default function FooterBottom({}: any) {
	return (
		<div className="mx-auto desktop-page-width px-6 lg:px-8">
			<div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-4 py-8">
				<div className="footer-section p-4 justify-center">
					<LogoBlack/>
					<SocialMediaLinks/>
				</div>

				<div className="footer-section p-4"><ContactDetails/></div>
				{/* <div className="footer-section p-4"><JoinNewsLetter/></div> */}

				<div className="footer-section p-4"><CopyrightDetails/></div>
			</div>
		</div>
	);
}
