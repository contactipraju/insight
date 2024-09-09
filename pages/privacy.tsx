// Page section components
import Head from "../components/head";
import Navbar from "../components/navbar";
import PrivacyContent from "../components/footer/privacy-content";
import FooterBottom from "../components/footer/footer-bottom";

export default function Privacy({}: any) {
	return (
		<>
			<Head />
			<div className="relative w-full">
				<Navbar />
				<main className="relative z-10 bg-gray-100"></main>
				<PrivacyContent/>
			</div>
			<FooterBottom/>
		</>
	);
}
