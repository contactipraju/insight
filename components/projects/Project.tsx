import './Project.scss';
import { IProjectData, ProjectProps } from './Projects.interfaces';
import { formatCurrencyShort } from './Projects.service';

const Project = ({project}:ProjectProps) => {
	const prepFinancials = (project: IProjectData) => {
		const result = Object.keys(project.financials).map((key: any, i: any) => {
			if (key === 'growth') {
				return <div className='col'>
					{/* <div className="amount">{formatCurrencyShort(project.financials[key])} ({(project.financials['percent_appreciated']).toFixed(2) + '%'})</div> */}
					<div className="amount font-extrabold">{(project.financials['percent_appreciated']).toFixed(2) + '%'}</div>
					<div className="text">{key.replace(/_/g,' ')}</div>
				</div>
			} else if(key === 'percent_appreciated' || key === 'weekly_rent') {
				return null;
			} else {
				return <div className='col'>
					<div className="amount font-medium">{formatCurrencyShort(project.financials[key])}</div>
					<div className="text">{key.replace(/_/g,' ')}</div>
				</div>
			}
		});

		return result;
	}

	const recentPurchase = (project: IProjectData): boolean => {
		if (((project.purchase_date < "2024/01/01" || project.in_progress) && project.financials.percent_appreciated < 8)) {
			return true;
		} else {
			return false;
		}
	}

	const prepType = (project: IProjectData) => {
		let result;

		switch(project.ptype) {
			case 'OWNER_OCCUPIER':
				result = 'Owner Occupier';
				break;

			case 'DEVELOPMENT':
				result = 'Development';
				break;

			case 'INVESTMENT':
				result = 'Investment';
				break;
			}

		return result;
	}

	return (
		<div className="project">
			<div className="details">
				<div className='image-container'>
					<div className='title'>{project.name}</div>
					<div className="images" style={{ backgroundImage: `url(${project.images![0]})` }}></div>
					<div className="footer flex flex-column justify-between">
						<div className='ptype px-1'>{prepType(project)}</div>
						<div className='state content-end'>{project.address.state}</div>
					</div>
				</div>

				<div className='data'>
					{(project.ptype === 'OWNER_OCCUPIER' || recentPurchase(project)) ? <div className="features">
						<ul>
							{project.features.map((item, index) => {
								if (index <3)
									return <li key={item}>{item}</li>;
							})}
						</ul>
					</div> : null}

					{project.ptype !== 'OWNER_OCCUPIER' ? <div className="financials">
						{!recentPurchase(project) ? prepFinancials(project) : ''}
					</div> : null}
				</div>
			</div>
		</div>
	)
}

export default Project;
