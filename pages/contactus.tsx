import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import ContactForm from "../components/contact-form";
import FooterBottom from "../components/footer/footer-bottom";

export default function Contactus({}: any) {
	return (
		<>
			<DefaultHeaderAndBody>
				<div className="content">
					<div className="relative grid h-screen min-h-0 place-items-center overflow-y-auto overflow-x-hidden sm:pt-2 md:max-h-[1200px] pt-24">
						<div className="relative isolate z-40 mx-auto h-70 max-h-screen max-w-3xl px-6">
							<div className="enquiries">
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</DefaultHeaderAndBody>

			<FooterBottom />
		</>
	);
}
