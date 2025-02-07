import Link from "next/link";

import Image from "next/image";

import logoImage from "../public/images/investorpro/logo-image.png";
import logoImageBlack from "../public/images/investorpro/logo-image-black.png";
import sowjanyaProfile from "../public/images/investorpro/sowjanya-profile.jpeg";

export default function LogoLink() {
	return (
		<Link href="/" className="group text-3xl font-bold">
			<div>
				<Image
					src={logoImage}
					alt=""
					className="max-w-[60%] md:max-w-[50%] lg:max-w-[40%] md:block"
				/>
			</div>

			<div className="hidden">
				<Image
					src={logoImageBlack}
					alt=""
					className="max-w-[60%] md:max-w-[50%] lg:max-w-[40%] md:block"
				/>
			</div>

			<div className="hidden">
				<Image
					src={sowjanyaProfile}
					alt=""
					className="max-w-[60%] md:max-w-[50%] lg:max-w-[40%] md:block"
				/>
			</div>
		</Link>
	);
}
