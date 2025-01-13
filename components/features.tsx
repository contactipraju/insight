const features = [
	{
		id: 1,
		title: `Discovery`,
		text: `We understand what matters the most for your specific investment requirements`,
	},
	{
		id: 2,
		title: `Strategy`,
		text: `We help device a strategy that aims to achieve your investment goals`,
	},
	{
		id: 3,
		title: `Research`,
		text: `We do the Search based on your Financials, Suitability, Feasibility Study, All background checks`,
	},
	{
		id: 4,
		title: `Evaluation`,
		text: `Filter and arrive at a handful of properties that match your search criteria`,
	},
	{
		id: 5,
		title: `Negotiation`,
		text: `Leaveraging our knowledge, skills and relationships to secure the property`,
	}
];

export default function Features() {
	return (
		<section id="process" className="isolate py-4 sm:py-8">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<h2 className="mt-2 text-xl font-bold sm:mt-2 sm:text-2xl md:mt-4">
					Process
				</h2>
				<div className="mx-auto max-w-6xl items-center flex flex-col md:flex-row">
					{features.map((feature) => (
						<div key={feature.id} className="relative rounded-2xl p-4 backdrop-blur-sm data-[state=open]:bg-white/60 data-[state=closed]:bg-white/30">
							<div className="text-xl font-bold leading-7">
								<span dangerouslySetInnerHTML={{ __html: feature.title }} />
							</div>
							<div className="data-[state=open]:animate-fadeIn">
								<p className="mt-4">{feature.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
