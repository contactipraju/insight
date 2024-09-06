import { brandName, brandFullname, companyName, companyFullname } from "../../constants/globals";
import './privacy-content.css';

export default function PrivacyContent({}: any) {
  return (
	<>
		<div className="privacy-content overflow-hidden">
			<div className="prose mx-auto max-w-screen-md px-6 py-10 lg:prose-lg md:pb-24 lg:py-16 body">
				<h1>Privacy Policy</h1>
				<p><strong>1. Introduction</strong></p>
				<p>Welcome to InvestorPro Buyer's Agency (referred to as "we", "our", or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a secure and transparent manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information in compliance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
				<p><strong>2. Information We Collect</strong></p>
				<p>We may collect the following types of personal information:</p>
				<ul>
					<li><strong>Personal Identification Details:</strong> Name, contact information (email address, phone number), and address.</li>
					<li><strong>Financial Information:</strong> Bank details, income, and other financial information required for property transactions.</li>
					<li><strong>Property Preferences:</strong> Information related to your property preferences and requirements.</li>
					<li><strong>Transaction Information:</strong> Details of property purchases, including purchase agreements and related documentation.</li>
					<li><strong>Communication Records:</strong> Records of communications with you, including emails, phone calls, and other interactions.</li>
				</ul>
				<p><strong>3. How We Collect Your Information</strong></p>
				<p>We collect personal information through various means, including:</p>
				<ul>
					<li><strong>Directly from You:</strong> When you provide information through our website, email, phone calls, or in-person meetings.</li>
					<li><strong>Third Parties:</strong> When you authorize us to collect information from third parties such as financial institutions or real estate agents.</li>
					<li><strong>Automatically:</strong> Through cookies and other tracking technologies when you visit our website.</li>
				</ul>
				<p><strong>4. Use of Your Information</strong></p>
				<p>We use your personal information for the following purposes:</p>
				<ul>
					<li><strong>To Provide Services:</strong> To assist you in finding and purchasing property, including facilitating communication and processing transactions.</li>
					<li><strong>To Improve Our Services:</strong> To understand your needs and preferences, and to enhance our services based on your feedback.</li>
					<li><strong>To Communicate with You:</strong> To send updates, respond to inquiries, and provide information relevant to your property search and purchase.</li>
					<li><strong>To Comply with Legal Obligations:</strong> To fulfill legal and regulatory requirements related to property transactions.</li>
				</ul>
				<p><strong>5. Disclosure of Your Information</strong></p>
				<p>We may disclose your personal information to:</p>
				<ul>
					<li><strong>Third Parties:</strong> Such as financial institutions, real estate agents, and legal professionals involved in your property transactions.</li>
					<li><strong>Service Providers:</strong> Who assist us in operating our business and delivering services, such as IT support and marketing agencies.</li>
					<li><strong>Regulatory Authorities:</strong> If required by law or to comply with legal obligations.</li>
				</ul>
				<p><strong>6. Security of Your Information</strong></p>
				<p>We implement reasonable measures to protect your personal information from unauthorized access, use, or disclosure. This includes physical, electronic, and managerial safeguards. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</p>
				<p><strong>7. Access and Correction</strong></p>
				<p>You have the right to access and correct your personal information held by us. If you wish to access or update your information, please contact us using the details provided below. We will respond to your request within a reasonable timeframe.</p>
				<p><strong>8. Complaints and Contact</strong></p>
				<p>If you have any concerns or complaints about how we handle your personal information, please contact us at:</p>
				<div className="contact-info">
					<p><strong>InvestorPro Buyer's Agency</strong></p>
					<p><strong>Address:</strong> 66 Hancock Dr, Cherrybrook NSW Australia </p>
					<p><strong>Email:</strong> info@investorpro.com.au </p>
				</div>
				<p>We will investigate and respond to your complaint in a timely manner. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC).</p>
				<p><strong>9. Changes to This Privacy Policy</strong></p>
				<p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our services after any changes indicates your acceptance of the revised policy.</p>
				<p><strong>10. Effective Date</strong></p>
				<p>This Privacy Policy is effective as of 1st October 2024.</p>
			</div>
		</div>
	</>
  );
}
