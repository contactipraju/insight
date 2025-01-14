import './ProjectFinancials.scss';

import { IProjectData, ProjectProps } from './Projects.interfaces';
import { formatCurrencyShort, capitilise } from './Projects.service';

const ProjectFinancials = ({project}:ProjectProps) => {
	const prepFinancials = (project: IProjectData) => {
		const result = Object.keys(project.financials).map((key: any, i: any) => {
			if (key === 'growth') {
				return <div className='col'>
					{/* <div className="amount">{formatCurrencyShort(project.financials[key])} ({(project.financials['percent_appreciated']).toFixed(2) + '%'})</div> */}
					<div className="amount font-extrabold">{(project.financials['percent_appreciated']).toFixed(2) + '%'}</div>
					<div className="text">{capitilise(key)}</div>
					<div className="tenure">({project['tenure_months']} months)</div>
				</div>
			} else if(key === 'percent_appreciated' || key === 'weekly_rent') {
				return null;
			} else {
				return <div className='col'>
					<div className="amount font-medium">{formatCurrencyShort(project.financials[key])}</div>
					<div className="text">{capitilise(key)}</div>
				</div>
			}
		});

		return result;
	}

	return (
		<>
			{prepFinancials(project)}
		</>
	)
}

export default ProjectFinancials;
