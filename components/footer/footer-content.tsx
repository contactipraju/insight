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
		<div className='footer-content'>
			<p className="mt-4 text-2xl font-bold sm:mt-10 sm:text-5xl md:text-3xl whitespace-pre-line">
				{footerHeadline}
			</p>

			<p className="mt-4 pr-8 text-lg sm:mt-6 sm:text-xl sm:leading-8">
				{footerText}
			</p>

			<a
				target="_blank"
				href="https://forms.investorpro.com.au/investorproptyltd1/form/Contactus/formperma/JZOUEjtVIRr2TKPhlB5eORxbXXJSV4jeqOdxTLapclI"
				className="mt-6 inline-block rounded-full bg-black px-6 py-2.5 font-semibold text-white sm:mt-10 w-48 btn-orange"
			>
				Book a discovery call
			</a>

			{/* <a
				href="tel: +61410776776"
				className="mt-6 inline-block rounded-full bg-black px-4 py-2.5 font-semibold text-white sm:mt-10 w-40 btn-orange"
			>
				Call: +61410776776
			</a> */}
		</div>
	);
}
