// Page section components
import Head from "./head";
import Navbar from "./navbar";

export default function DefaultHeaderAndBody({children}: any) {
	return (
		<>
			<Head />
			<div className="relative w-full">
				<Navbar />
				<main className="relative z-10 bg-gray-100 pt-16">
					{children}
				</main>
			</div>
		</>
	);
}
