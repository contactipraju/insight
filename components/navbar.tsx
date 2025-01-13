import Link from "next/link";

import LogoLink from "./logo-link";

export default function Navbar() {
	return (
		<div className="relative">
			<header className="absolute inset-x-0 z-20 sm:fixed sm:h-16 bg-black text-white py-5 sm:py-8 sm:backdrop-blur">
				<div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-8">
					<LogoLink />

					<nav className="flex items-center justify-between sm:ml-16 sm:w-full">
						<div className="hidden gap-10 sm:flex">
							<a className="font-medium" href="/#projects"> Portfolio </a>
							<a className="font-medium" href="/#reviews"> Reviews </a>
							<a className="font-medium" href="/#process"> Process </a>
							{/* <a className="font-medium" href="/FAQ"> FAQ </a> */}
						</div>

						<div className="links hidden sm:flex ml-8">
							<a
								href="tel: +61410776776"
								className="rounded-full bg-black px-3 py-2 font-semibold text-white btn-orange whitespace-nowrap"
							>
								Call
							</a>
						</div>

						<div className="links hidden sm:flex ml-8">
							{/* <Link href="/keystatic" className="rounded-full px-5 py-2.5 font-medium hidden gap-10 sm:inline"> Admin </Link> */}
							<Link
								rel="noopener noreferrer" target="_blank"
								href="https://forms.investorpro.com.au/investorproptyltd1/form/Contactus/formperma/JZOUEjtVIRr2TKPhlB5eORxbXXJSV4jeqOdxTLapclI" 
								className="rounded-full bg-black px-5 py-2 font-semibold text-white btn-orange whitespace-nowrap"
								>
									Book a discovery call
							</Link>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
}
