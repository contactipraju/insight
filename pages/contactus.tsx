// Page section components
import Head from "../components/head";
import Navbar from "../components/navbar";
import ContactForm from "../components/contact-form";
import FooterBottom from "../components/footer/footer-bottom";

export default function Contactus({}: any) {
	return (
		<>
			<Head />
			<div className="relative w-full">
				<Navbar />
				<main className="relative z-10 bg-gray-100"></main>
			</div>

			<footer className="sticky bottom-0 overflow-hidden">
				<div className="relative grid h-screen max-h-[800px] min-h-0 place-items-center overflow-y-auto overflow-x-hidden bg-blob-2 sm:pt-32 sm:pb-16 md:max-h-[1200px] md:py-48 lg:py-60 pt-16">
					<div className="relative isolate z-40 mx-auto h-96 max-h-screen max-w-xl px-6 lg:px-8">
						<div className="enquiries">
							<ContactForm />
						</div>

						<div className="mt-4">
							Or call us at: <span>&#9742;</span>: +61 432 908 730
						</div>
					</div>
					<FooterBottom/>
				</div>
			</footer>
		</>
	);
}
