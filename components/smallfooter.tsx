import SocialMediaLinks from "./social-media-links";
import JoinNewsLetter from "./join-news-letter";

export default function Smallfooter({}: any) {
	return (
		<div className="sticky bottom-0 overflow-hidden">
			<div className="relative grid h-screen max-h-[800px] min-h-0 place-items-center overflow-y-auto overflow-x-hidden sm:pt-32 sm:pt-16 md:max-h-[1200px] md:pt-48 lg:pt-60">
				<div className="mx-auto flex flex-col gap-4 px-6">
					<div className="flex flex-col items-center justify-between gap-1 md:flex-row md:gap-6">
						<div className="left">
							<SocialMediaLinks/>
							<div className="details pl-4">
								<p className="text-center text-sm leading-tight text-sand-12 md:text-left">© 2024 InvestorPro. All rights reserved. <a className="underline" href="/privacy">Privacy policy</a></p>
								<p className="text-center text-xs leading-tight text-sand-12 md:text-left">Made by iCube Technologies Pvt Ltd</p>
							</div>
						</div>

						<div className="right">
							<JoinNewsLetter/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

