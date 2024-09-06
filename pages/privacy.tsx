// Keystatic
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";

// Page section components
import Head from "../components/head";
import Navbar from "../components/navbar";
import PrivacyContent from "../components/footer/privacy-content";

export default function Privacy({ testimonials, landingPage }: any) {
	return (
		<>
			<Head />
			<div className="relative w-full">
				<Navbar />
				<main className="relative z-10 bg-gray-100"></main>
				<PrivacyContent/>
			</div>
		</>
	);
}
