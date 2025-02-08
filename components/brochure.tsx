import Image from "next/image";

export default function Brochure() {
	return (
		<section className="bg-gray-100 py-12 px-6">
		  <div className="text-center mb-10">
			<h3 className="text-2xl font-bold">Helping investors fast-track financial freedom through smart property acquisitions.</h3>
		  </div>
	
		  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
			{/* What We Do */}
			<div className="bg-white p-6 rounded-2xl shadow-lg">
			  <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
			  <ul className="text-gray-700 space-y-3">
				<li><strong>Property Investment Strategy</strong> – Tailored plans for high-growth investments.</li>
				<li><strong>Buyer's Advocacy</strong> – End-to-end property purchase support.</li>
				<li><strong>Portfolio Building</strong> – Helping investors scale and diversify.</li>
				<li><strong>Off-Market & Value-Add Deals</strong> – Exclusive opportunities for high returns.</li>
				<li><strong>Smart Negotiation</strong> – Securing properties below market value.</li>
			  </ul>
			</div>
	
			{/* How We Do */}
			<div className="bg-white p-6 rounded-2xl shadow-lg">
			  <h2 className="text-2xl font-semibold mb-4">How We Do</h2>
			  <ul className="text-gray-700 space-y-3">
				<li><strong>Expert Market Insights</strong> – Spotting growth suburbs & hidden gems.</li>
				<li><strong>Strong Network</strong> – Access to exclusive off-market deals.</li>
				<li><strong>Proven Investment Strategies</strong> – Tested on personal & client portfolios.</li>
				<li><strong>Strategic Negotiation</strong> – Ensuring clients never overpay.</li>
				<li><strong>Value-Add Approach</strong> – Identifying equity growth opportunities.</li>
			  </ul>
			</div>

			{/* Who We Are */}
			{/* <div className="bg-white p-6 rounded-2xl shadow-lg">
			  <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
			  <ul className="text-gray-700 space-y-3">
				<li>A passionate investor turned <strong>full-time Buyer’s Agent & Property Strategist</strong>.</li>
				<li>Built a <strong>$7.8M personal portfolio</strong> (7 properties in 7 years).</li>
				<li>Helped clients <strong>invest $11.2M+</strong> in profitable properties.</li>
				<li>A <strong>Class 1 Real Estate Licensee</strong> with hands-on market expertise.</li>
				<li>Committed to helping investors <strong>achieve financial freedom</strong>.</li>
			  </ul>
			</div> */}
		  </div>
		</section>
	  );
}
