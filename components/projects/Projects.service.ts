import axios from 'axios';
import { IProjectData } from './Projects.interfaces';

export async function getProjectsLocal() {
	const resp = await axios.get('json/projects.json');
	const result = resp.data.data.filter((project: IProjectData) => !project['hide_in_site']);

	return processProjects(result);
}

export function processProjects(projects: IProjectData[]) {
	let data = projects.slice();

	for (let i=0; i<data.length; i++) {
		let dat = data[i];
		let fin = dat['financials'];

		let total_cost = fin['purchase_cost'];
		if (fin['holding_costs']) {
			total_cost += fin['holding_costs'];
		}

		let appreciation = 0;
		let months;

		if (fin['sold_price'] && dat['sold_date']) {
			appreciation = fin['sold_price'] - total_cost;
			months = monthDiff(new Date(dat['purchase_date']), new Date(dat['sold_date']));
		} else if (fin['current_value'] && dat['valued_date']) {
			appreciation = fin['current_value'] - total_cost;
			months = monthDiff(new Date(dat['purchase_date']), new Date(dat['valued_date']));
		} else {
			months = 12;
		}

		fin['appreciation'] = appreciation;
		fin['percent_appreciated'] = (total_cost + appreciation) / (total_cost / 100) - 100;
	}

	return data;
}

function monthDiff(d1: Date, d2: Date) {
	if (!d1 || !d2)
		return 0;

	var months;
	months = (d2.getFullYear() - d1.getFullYear()) * 12;
	months -= d1.getMonth();
	months += d2.getMonth();
	return months <= 0 ? 0 : months;
}
