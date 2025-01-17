import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import { fetchToken, saveAsLead } from './../services/zoho.service';
import { useEffect } from 'react';

export default function ContactForm({}: any) {

	const url = 'https://forms.zohopublic.com.au/investorproptyltd1/form/Contactus/formperma/JZOUEjtVIRr2TKPhlB5eORxbXXJSV4jeqOdxTLapclI';

	const dataReady = (values: any) => {
		console.log("contact-form - dataReady: ", values);

		fetchToken().then((response) => {
			console.log("Success", response);
		});

		// saveAsLead(values).then((data) => {
		// 	console.log("Success");
		// });
	};

	useEffect(() => {
		dataReady({});
	}, []);

	return (
		<>
			{/* <FormRenderer
				schema={schema}
				componentMapper={componentMapper}
				FormTemplate={FormTemplate}
				onSubmit={(values) => dataReady(values)}
			/> */}
		</>
	);
}
