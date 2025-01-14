import './Project.scss';

import { ProjectProps } from './Projects.interfaces';

import ProjectImage from './ProjectImage';
import ProjectFinancials from './ProjectFinancials';

const ProjectDetailed = ({project}: ProjectProps) => {
	return (
		<div className="project">
			<div className="details">
				<ProjectImage project={project}></ProjectImage>

				<div className='data'>
					<div className="financials">
						<ProjectFinancials project={project}></ProjectFinancials>
					</div>

					<div className="features">
						<ul>
							{project.features.map((item, index) => {
								if (index <3)
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
