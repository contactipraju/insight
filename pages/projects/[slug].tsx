import DefaultHeaderAndBody from "../../components/defaultHeaderAndBody";
import FooterBottom from "../../components/footer/footer-bottom";

import { useRouter } from 'next/router';
 
export default function Slug() {
	const router = useRouter();

	return (
		<>
			<DefaultHeaderAndBody>
				<div className="content">
					<p>Post: {router.query.slug}</p>
				</div>
			</DefaultHeaderAndBody>

			<FooterBottom />
		</>
	);
}
