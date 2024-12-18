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

export function prepareStats(data: IProjectData[]) {
	let stats: any = [];

	let total_purchase = 0;
	let total_value_added = 0;
	let total_percent_growth = 0;

	for (let i=0; i<3; i++) {
		let dat = data[i];
		let fin = data[i]['financials'];

		total_purchase += fin['purchase_cost'];
		let total_cost = fin['purchase_cost'];
		total_cost += fin['holding_costs']?fin['holding_costs']:0;

		total_value_added += data[i].financials['appreciation'];
		let percent_growth = (total_cost + data[i].financials['appreciation']) / (total_cost / 100) - 100;
		total_percent_growth += percent_growth;
	}

	// stats.push({title: 'Happy families (and growing..)', value: data.length});
	stats.push({title: 'Worth of properties bought', value: formatCurrencyShort(total_purchase), tool: total_purchase});
	stats.push({title: 'Total value added', value: formatCurrencyShort(total_value_added), tool: total_value_added});
	stats.push({title: 'Avg. annual growth', value: (total_percent_growth/data.length).toFixed(2) + '%'});

	return stats;
}

export function calculateAggregates(projects: IProjectData[]) {
	let _purchase = 0;
	let _holding = 0;
	let _appreciation = 0;

	for (let i=0; i<projects.length; i++) {
		let costs = projects[i].financials;

		_purchase += costs.purchase_cost;
		_holding += costs.holding_costs;
		_appreciation += costs.appreciation;
	}

	return { _purchase, _holding, _appreciation };
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

const formatCurrencyLong = (curr: any) => {
	return '$' + Number(curr.toFixed(0)).toLocaleString();
};

const formatCurrencyShort = (curr: any) => {
	return Intl.NumberFormat('en-US', {
		notation: "compact",
		maximumFractionDigits: 1
	  }).format(curr);
};
