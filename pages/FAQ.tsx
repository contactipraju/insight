import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

export interface faq {
	slug: string,
	question: string,
	answer: string
};

export default function FAQ({}: any) {
	const faqs: faq[] = [
		{
			slug: 'why-to-invest-in-property',
			question: 'Why to Invest in Properties?',
			answer: `* Beat the inflation: Often times Property Investments yield better results than having money in your bank account.
	* Leverage financing: Willingness of Banks and Financial Institutions to lend money with low-interest rates.
	* Financial Independence: Constant and guaranteed stream of income. Alternate source of Income.
	* Early Retirement: With right strategy, property investments help retire early.
	* Supporting next generation: Home ownership is getting harder by each year. Having a portfolio of investment properties helps your successors own a home or an investment property early in their life.`
		},
		{
			slug: 'What-are-the-Risks-involved-in-investing-in-property',
			question: 'What are the Risks involved in investing in property?',
			answer: `Compared to stocks/commodities over long periods of time, Real Estate is less volatile and risk-free, However look out for:
	* Market Risk:
		* Example: Property value going down.
		* Reasons: Macro-economical. Economic Uncertainties. Dynamics of Supply and Demand.
		* Mitigation: Thorough knowledge, Diversification.
	* Liquidity Risk:
		* Example: An investor can't quickly sell a property to raise money.
		* Reason: Bad location selection. Improper or unsuitable Strategy.
		* Mitigations: Select a good Suburb/Location/Property Type. Diversify.
	* Credit risk:
		* Example: Occurs when a tenant stops paying rent.
		* Reasons: High Vacancy because of Bad location. Bad tenant selection.
		* Mitigations: Proper due diligence while selecting the Location, Property Manager and Tenant.
	* Property Risks:
		* Over-paying:
		* Missing-out: 
		* Hidden Structural problems:`
		},
		{
			slug: 'how-can-you-help-our-portfolio',
			question: 'How can you help our portfolio?',
			answer: `* Time and Energy:
		* We can save your time spent on Searching:
			* Strong knowledge of the real estate market
			* Knowledge and tools finding the high-growth areas/suburbs
	* Potential of significant savings:
		* We do the Assessment and Due diligence, making sure you aren’t over paying.
		* In most cases, the total expenses you incur on buying a house will be significantly less with an experienced buyers agent.
	* Closing the deals (not miss out):
		* Relationships with Real Estate Agents / Sellers:
		* Impressive negotiating skills
		* Access to Off-market deals
	* Quality of service:
		* We represent YOU and your interests, exclusively.
		* We handle all aspects of the purchase process.
		* We help you avoid costly mistakes.
		* We make a complex and tiring purchase process relatively easy.`
		},
		{
			slug: 'why-to-invest-in-property',
			question: 'Do you get commission from the Sellers as well?',
			answer: `No. Under the Australian Law, we cannot act as both a buyer’s and seller’s agent for the same transaction.
	We do not get any commissions from the Sellers, Builders or the Developers.
	`
		},
		{
			slug: 'why-to-invest-in-property',
			question: 'What services do you offer? What all is included?',
			answer: `* Strategy
	* Financing & Serviceability
	* Property Search
	* Conducting due diligence
	* Property assessment reports
	* Negotiations
	* Auction bidding services
	* Closing the deals
	`
		}
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
