import SocialMediaLinks from "./social-media-links";
import JoinNewsLetter from "./join-news-letter";
import CopyrightDetails from "./copyright-details";

export default function FooterBottom({}: any) {
	return (
		<div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-4 h-24">
			<SocialMediaLinks/>
			{/* <JoinNewsLetter/> */}
			<CopyrightDetails/>
		</div>
	);
}
