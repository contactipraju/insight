import './Project.scss';
import { ProjectProps } from './Projects.interfaces';
import { formatCurrencyShort } from './Projects.service';

const Project = ({project}:ProjectProps) => {

	return (
		<div className="project">
			<div className="details">
				<div className="images" style={{ backgroundImage: `url(${project.images![0]})` }}></div>

				<div className='data'>
					<div className="name">{project.name}</div>

					<div className="features">
						<ul>
							{project.features.map((item, index) => {
								if (index <3)
									return <li key={item}>{item}</li>;
							})}
						</ul>
					</div>

					<div className="financials">
						<table>
							<tbody>
							{
								project.ptype !== 'OWNER_OCCUPIER' &&
								!((project.purchase_date < "2024/01/01" || project.in_progress) && project.financials.percent_appreciated < 8) &&
								Object.keys(project.financials).map((key: any, i: any) => {
									if (key === 'appreciation') {
										return <tr key={i}>
											<td className="text">{key.replace(/_/g,' ')}</td>
											<td className="amount">{formatCurrencyShort(project.financials[key])} ({(project.financials['percent_appreciated']).toFixed(2) + '%'})</td>
										</tr>
									} else if(key === 'percent_appreciated' || key === 'weekly_rent') {
										return null;
									} else {
										return <tr key={i}>
											<td className="text">{key.replace(/_/g,' ')}</td>
											<td className="amount">{formatCurrencyShort(project.financials[key])}</td>
										</tr>
									}
								}
							)}
							</tbody>
						</table>
					</div>

					<div className="success">
						<ul>
							{project.success.map(item => {
								return <li key={item}>{item}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;
