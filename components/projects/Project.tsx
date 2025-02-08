import './Project.scss';

import { recentPurchase } from './Projects.service';

import { ProjectProps } from './Projects.interfaces';

import ProjectImage from './ProjectImage';
import ProjectFinancials from './ProjectFinancials';

const Project = ({project}: ProjectProps) => {
	return (
		<div className="project rounded-lg">
			<div className="details">
				<ProjectImage project={project}></ProjectImage>

				<div className='data'>
					{project.ptype !== 'OWNER_OCCUPIER' && !recentPurchase(project) ? <div className="financials">
						<ProjectFinancials project={project}></ProjectFinancials>
					</div> : null}

					{(project.ptype === 'OWNER_OCCUPIER' || recentPurchase(project)) ? <div className="features">
						<ul>
							{project.features.map((item, index) => {
								if (index <3)
									return <li key={item}>{item}</li>;
							})}
						</ul>
					</div> : null}
				</div>
			</div>
		</div>
	)
}

export default Project;
