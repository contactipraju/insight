import FooterContent from "./footer-content";
import FooterBottom from "./footer-bottom";

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

				<FooterBottom />
			</div>
		</footer>
	);
}
