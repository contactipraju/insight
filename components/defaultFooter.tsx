import ContactForm from "../components/contact-form";
import FooterBottom from "../components/footer/footer-bottom";

export default function DefaultFooter({children}: any) {
	return (
		<footer className="sticky bottom-0 overflow-hidden">
			<div className="relative grid h-screen max-h-[800px] min-h-0 place-items-center overflow-y-auto overflow-x-hidden bg-orange-100 sm:pt-32 sm:pb-16 md:max-h-[1200px] md:py-48 lg:py-60 pt-24">
				<div className="relative isolate z-40 mx-auto h-96 max-h-screen max-w-xl px-6 lg:px-8">
					<div className="enquiries">
						<ContactForm />
					</div>

					{/* <div className="mt-4">
						Or call us at: <span>&#9742;</span>: +61 432 908 730
					</div> */}
				</div>
				<FooterBottom/>
			</div>
		</footer>
	);
}
