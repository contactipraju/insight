import axios from 'axios';

export async function getProjectsLocal() {
	const resp = await axios.get('json/projects.json');
	const result = resp.data.data.filter((project: any) => !project['hide_in_site']);
	
	return result;
}

export async function fetchToken() {
	const accounts_url = 'https://accounts.zoho.com.au';
	const refresh_token = '1000.662d87d167192b1f1af2befef70b5d62.a5896c8c6af9f307e3f27eb3bacdfecc';

	const client_id = '1000.NFJ6BJ864TDI4TTH6SVU29CZZ2SB8Y';
	const client_secret = '48b37a72890b7c606ee3fb4652ab842e23bb8bd35d';

	let url = `${accounts_url}/oauth/v2/token?refresh_token=${refresh_token}&client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token`;

	axios.post(url)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.warn(error);
		});
	}

export async function saveAsLead(data: any) {
	const accounts_url = 'https://accounts.zoho.com.au';
	const url = accounts_url;

	let formData = new FormData();
	Object.keys(data).forEach(key => formData.append(key, data[key]));

	const config = {     
		headers: { 'content-type': 'multipart/form-data' }
	}

	axios.post(url, formData, config)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
}
