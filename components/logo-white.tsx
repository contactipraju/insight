import Link from "next/link";
import Image from "next/image";

import logoBlack from "../public/images/investorpro/logo-image-black.png";

export default function LogoBlack() {
	return (
		<Link href="/" className="group">
			<div className="w-auto">
				<Image
					src={logoBlack}
					alt=""
					width={360}
					className="md:block"
				/>
			</div>
		</Link>
	);
}
