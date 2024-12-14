import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

export interface faq {
	slug: string,
	question: string,
	answer: string
};

export default function FAQ({}: any) {
	const faqs: faq[] = [
	];
	
	return (
		<>
			<DefaultHeaderAndBody>
				<div className="content">
					{faqs?.map((faq: faq) => (
						<div className="faq" key={faq.slug}>
							<div>{faq.question}</div>
							<div>{faq.answer}</div>
						</div>
					))}
				</div>
			</DefaultHeaderAndBody>

			<FooterBottom/>
		</>
	);
}
