import Smallfooter from "./smallfooter";

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
		<footer className="sticky bottom-0  overflow-hidden">
    		<div className="relative grid h-screen max-h-[800px] min-h-0 place-items-center overflow-y-auto overflow-x-hidden bg-blob-2 sm:pt-32 sm:pb-16 md:max-h-[1200px] md:py-48 lg:py-60">
				<div className="relative isolate z-40 mx-auto h-96 max-h-screen max-w-xl px-6 lg:px-8">
					<div>
						<a className="group text-3xl font-bold" href="/">
							<span className="font-bold">InvestorPro</span>
						</a>
						<span className="ml-2 text-xl">Buyer's Agency</span>
					</div>
					<p className="mt-4 text-2xl font-bold sm:mt-10 sm:text-5xl md:text-3xl whitespace-pre-line">
						{footerHeadline}
					</p>
					<p className="mt-4 pr-8 text-lg sm:mt-6 sm:text-xl sm:leading-8">
						{footerText}
					</p>
					<a
						href="/contactus"
						className="mt-6 inline-block rounded-full bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-900 sm:mt-10"
					>
						Contact us
					</a>
				</div>

				<Smallfooter/>
			</div>
		</footer>
	);
}
