import './Project.scss';

import { useContext } from 'react';
import { ParamsContext } from '../../pages/performance';

import { ProjectProps } from './Projects.interfaces';

import ProjectImage from './ProjectImage';
import ProjectFinancials from './ProjectFinancials';

const ProjectDetailed = ({project}: ProjectProps) => {
	const params = useContext(ParamsContext);

	return (
		<div className="project rounded-lg">
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

				{params.role === 'admin' &&
					<div className='admin-content my-2'>
						<img
							className='inline mx-2'
							width={10}
							height={10}
							src='images/location.png'/>

						<span className='title inline align-middle'>
							{project.address.street}, {project.address.suburb}, {project.address.state}
						</span>
					</div>}
			</div>
		</div>
	)
}

export default ProjectDetailed;
