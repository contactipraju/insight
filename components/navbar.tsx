import Link from "next/link";

import LogoLink from "./logo-link";

export default function Navbar() {
	return (
		<div className="relative">
			<header className="absolute inset-x-0 z-20 sm:fixed sm:h-24 bg-black text-white py-5 sm:py-8 sm:backdrop-blur">
				<div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6 lg:px-8">
					<LogoLink />

					<nav className="flex items-center justify-between sm:ml-16 sm:w-full">
						<div className="hidden gap-10 sm:flex">
							<a className="font-medium" href="/#features"> Process </a>
							<a className="font-medium" href="/#projects"> Portfolio </a>
							<a className="font-medium" href="/#reviews"> Reviews </a>
						</div>

						<div className="links hidden sm:flex">
							{/* <Link href="/keystatic" className="rounded-full px-5 py-2.5 font-medium hidden gap-10 sm:inline"> Admin </Link> */}
							<Link href="/contactus" className="rounded-full bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-900 whitespace-nowrap"> Contact us </Link>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
}
