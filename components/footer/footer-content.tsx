export type FooterProps = {
	footerHeadline: string;
	footerText: string;
};

type ComponentProps = {
	data: FooterProps;
};

export default function FooterContent({
	data: { footerHeadline, footerText }
}: ComponentProps) {
	return (
		<>
			<p className="mt-4 text-2xl font-bold sm:mt-10 sm:text-5xl md:text-3xl whitespace-pre-line">
				{footerHeadline}
			</p>

			<p className="mt-4 pr-8 text-lg sm:mt-6 sm:text-xl sm:leading-8">
				{footerText}
			</p>

			<a
				target="_blank"
				href="https://forms.investorpro.com.au/investorproptyltd1/form/Contactus/formperma/JZOUEjtVIRr2TKPhlB5eORxbXXJSV4jeqOdxTLapclI"
				className="mt-6 inline-block rounded-full bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-900 sm:mt-10 w-32"
			>
				Contact us
			</a>
		</>
	);
}
