
export default function Smallfooter({}: any) {
	return (
		<div className="sticky bottom-0  overflow-hidden">
			<div className="relative grid h-screen max-h-[800px] min-h-0 place-items-center overflow-y-auto overflow-x-hidden sm:pt-32 sm:pb-16 md:max-h-[1200px] md:py-48 lg:py-60">
				<div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
					<div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-6">
						<a aria-label="InvestorPro" className="py-2" href="/">
							<span>InvestorPro</span>
						</a>
						<div className="flex gap-2">
							<a className="shrink-0 rounded-lg p-3 hover:bg-slate-3 active:bg-slate-5 transition-colors w-12" href="https://www.facebook.com/profile.php?id=61564307046162" target="_blank">
								<span className="sr-only">Instagram</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
								</svg>
							</a>

							<a className="shrink-0 rounded-lg p-4 hover:bg-slate-3 active:bg-slate-5 transition-colors w-12" href="https://www.instagram.com/investorpro.ba" target="_blank">
								<span className="sr-only">X (Twitter)</span>
								<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true">
								<path fill="currentColor" d="M9.309 6.928 14.406 1h-1.208L8.772 6.147 5.237 1H1.16l5.346 7.784L1.16 15h1.208l4.674-5.436L10.775 15h4.077L9.31 6.928ZM7.655 8.852l-.542-.775-4.31-6.167H4.66l3.478 4.977.541.775 4.521 6.47h-1.855l-3.69-5.28Z"></path>
								</svg>
							</a>

							<a className="shrink-0 rounded-lg p-3 hover:bg-slate-3 active:bg-slate-5 transition-colors w-12" href="https://www.linkedin.com/company/investorproba" target="_blank">
								<span className="sr-only">LinkedIn</span>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
									width="26" height="26" viewBox="0 0 192 192">
									{
										<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
										<path d="M0,192v-192h192v192z" fill="none"></path>
										<g fill="#ffffff"><g id="surface1">
										<path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
										</g>
										</g>
										</g>
									}
								</svg>
							</a>
						</div>
					</div>
					<div className="flex flex-col justify-between gap-x-12 gap-y-4 text-center md:flex-row">
						<p className="text-center text-sm leading-tight text-sand-12 md:text-left">© 2024 InvestorPro. All rights reserved. <a className="underline hover:text-black" href="/privacy">Privacy policy</a></p>
						<p className="text-center text-sm leading-tight text-sand-12 md:text-right">Made by iCube Technologies Pvt Ltd</p>
					</div>
				</div>
			</div>
		</div>
	);
}
