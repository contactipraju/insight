import './ProjectDetailed.scss';
import { ProjectProps } from './Projects.interfaces';
import { formatCurrencyShort } from './Projects.service';

const ProjectDetailed = ({project}:ProjectProps) => {

	return (
		<div className="project">
			<div className="details">
				{/*
					<div className='title'>
						<div className="type">{project.type}</div>

						<div className="location" style={{ backgroundImage: `url(images/location.png)` }}>
							{project.location}
						</div>
					</div>
				*/}

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
							{/* <thead>
								<tr>
									<th className="text">Financials</th>
									<th className="amount">(AUD)</th>
								</tr>
							</thead> */}
							<tbody>
							{
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

export default ProjectDetailed;
