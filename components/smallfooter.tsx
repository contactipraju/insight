import SocialMediaLinks from "./social-media-links";

export default function Smallfooter({}: any) {
	return (
		<div className="sticky bottom-0  overflow-hidden">
			<div className="relative grid h-screen max-h-[800px] min-h-0 place-items-center overflow-y-auto overflow-x-hidden sm:pt-32 sm:pb-16 md:max-h-[1200px] md:py-48 lg:py-60">
				<div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
					<div className="flex flex-col items-center justify-between gap-1 md:flex-row md:gap-6">
						<div className="left">
							<SocialMediaLinks/>
							<p className="text-center text-sm leading-tight text-sand-12 md:text-left">© 2024 InvestorPro. All rights reserved. <a className="underline hover:text-black" href="/privacy">Privacy policy</a></p>
							<p className="text-center text-xs leading-tight text-sand-12 md:text-left">Made by iCube Technologies Pvt Ltd</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

