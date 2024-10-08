import Link from "next/link";

import Image from "next/image";

import logoImage from "../public/images/logo-image.png";


export default function LogoLink() {
	return (
		<Link href="/" className="group text-3xl font-bold">
			<div>
				<Image
					src={logoImage}
					alt=""
					className="max-w-[60%] md:max-w-[60%] lg:max-w-[60%] md:block"
				/>
			</div>
		</Link>
	);
}
