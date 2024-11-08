import './Project.scss';

const Project = ({project}) => {

	return (
		<div className="project">
			<div className="details">
				<div className='title'>
					<div className="type">{project.type}</div>

					<div className="location" style={{ backgroundImage: `url(images/portfolio/location.png)` }}>
						{project.location}
					</div>
				</div>

				<div className="name">{project.name}</div>

				<div className="images" style={{ backgroundImage: `url(${project.images![0]})` }}></div>

				<div className="features">
					<ul>
						{project.features.map(item => {
							return <li key={item}>{item}</li>;
						})}
					</ul>
				</div>

				<div className="financials">
					<table>
						<thead>
							<tr>
								<th className="text">Financials</th>
								<th className="amount">(AUD)</th>
							</tr>
						</thead>
						<tbody>
						{
							Object.keys(project.financials).map((key: any, i: any) => (
								<tr key={i}>
									<td className="text">{key.replace(/_/g,' ')}</td>
									<td className="amount">{project.financials[key]}</td>
								</tr>
							))}
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
	)
}

export default Project;
