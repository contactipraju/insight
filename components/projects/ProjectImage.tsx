import './ProjectImage.scss';

import { ProjectProps } from './Projects.interfaces';
import { capitilise } from './Projects.service';

const ProjectImage = ({project}: ProjectProps) => {
	return (
		<div className='image-container'>
			<div className='title'>{project.name}</div>
			<div className="images rounded-t-lg" style={{ backgroundImage: `url(${project.images![0]})` }}></div>
			<div className="footer flex flex-column justify-between">
				<div className='ptype px-1'>{capitilise(project.ptype)}</div>
				<div className='state content-end'>{project.address.state}</div>
			</div>
		</div>
	)
}

export default ProjectImage;
