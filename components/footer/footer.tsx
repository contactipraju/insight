import SocialMediaLinks from "./social-media-links";
import JoinNewsLetter from "./join-news-letter";
import CopyrightDetails from "./copyright-details";
import FooterContent from "./footer-content";

export type FooterProps = {
	footerHeadline: string;
	footerText: string;
};

type ComponentProps = {
	data: FooterProps;
};

export default function Footer({
	data: { footerHeadline, footerText },
}: ComponentProps) {
	return (
		<footer className="sticky bottom-0 overflow-hidden">
			<div className="relative bg-blob-2 grid h-screen max-h-[1200px] min-h-0 overflow-y-auto overflow-x-hidden sm:pt-32 sm:pt-16 md:max-h-[1200px] md:pt-48 lg:pt-60">
				<div className="mx-auto flex flex-col gap-2 px-6 pb-8">
					<FooterContent data={{footerHeadline, footerText}} />
				</div>

				<div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-4">
					<CopyrightDetails />
					<SocialMediaLinks/>
					<JoinNewsLetter/>
				</div>
			</div>
		</footer>
	);
}
