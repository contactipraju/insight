export default function ContactForm({}: any) {

	const url = 'https://forms.zohopublic.com.au/investorproptyltd1/form/Contactus/formperma/JZOUEjtVIRr2TKPhlB5eORxbXXJSV4jeqOdxTLapclI';

	return (
		<>
			<div className="h-100">
				<iframe src={url} height={830} width={650}/>
			</div>
		</>
	);
}
