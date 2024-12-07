import axios from 'axios';
import { IProjectData } from './Projects.interfaces';

export async function getProjectsLocal() {
	const resp = await axios.get('json/projects.json');
	const result = resp.data.data.filter((project: IProjectData) => !project['hide_in_site']);

	return result;
}
