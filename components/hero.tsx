import Image from "next/image";

import heroImage from "../public/images/hero-image.png";

export type HeroProps = {
	heroHeadline: string;
	heroIntroText: string;
};

type ComponentProps = {
	data: HeroProps;
};

export default function Hero({
	data: { heroHeadline, heroIntroText },
}: ComponentProps) {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-white/50 to-transparent">
		{/* Blob 2 */}

			<div className="relative z-10 mx-auto grid max-w-6xl md:grid-cols-2 py-8 md:py-16 px-6 md:py-8 md:pb-8 lg:px-8">
				<Image
					src={heroImage}
					alt=""
					className="absolute right-0 bottom-0 hidden max-w-[60%] md:block mr-24"
				/>

				{/* Mobile image */}
				<Image
					src={heroImage}
					alt=""
					className="mx-auto w-[85%] max-w-[80%] md:hidden"
				/>

				<div>
					<h1 className="mt-2 text-2xl font-bold sm:text-2xl md:mt-4 md:text-3xl lg:text-3xl whitespace-pre-line">
						{heroHeadline}
					</h1>

					<p className="mt-6 sm:mt-10 sm:text-base sm:leading-6 whitespace-pre-line">
						{heroIntroText}
					</p>
				</div>
			</div>
		</section>
	);
}
