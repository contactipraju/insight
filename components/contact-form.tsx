import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';

export default function ContactForm({}: any) {
	const schema = {
		fields: [
			{
				component: componentTypes.TEXT_FIELD,
				name: 'name',
				label: 'Your name',
				isRequired: true,
				validate: [{ type: 'required' }]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'email',
				label: 'Email',
				isRequired: true,
				validate: [
					{ type: 'required' },
					{
						type: 'pattern',
						pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
						message: 'Not valid email'
					}
				]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'phone',
				label: 'Phone number'
			},
			{
				component: componentTypes.TEXTAREA,
				name: 'message',
				label: 'Message'
			},
			{
				component: componentTypes.CHECKBOX,
				name: 'newsletters',
				label: 'I want to receive newsletter',
				checked: true
			}
		]
	};

	return (
		<>
			<FormRenderer
				schema={schema}
				componentMapper={componentMapper}
				FormTemplate={FormTemplate}
				onSubmit={console.log}
			/>
		</>
	);
}
