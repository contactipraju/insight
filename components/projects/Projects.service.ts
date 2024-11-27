import axios from 'axios';

export async function getProjectsLocal() {
	const resp = await axios.get('json/projects.json');
	const result = resp.data.data.filter((project: any) => !project['hide_in_site']);
	
	return result;
}
