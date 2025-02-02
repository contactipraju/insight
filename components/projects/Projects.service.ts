import axios from 'axios';
import { IProjectData } from './Projects.interfaces';

export async function getPublicProjects() {
	const resp = await axios.get('json/projects.json');
	const result = resp.data.data.filter((project: IProjectData) => project['public']);

	return processProjects(result);
}

export async function getAllProjects() {
	const resp = await axios.get('json/projects.json');

	return processProjects(resp.data.data);
}

export function processProjects(projects: IProjectData[]) {
	let data = projects.slice();

	for (let i=0; i<data.length; i++) {
		let dat = data[i];
		let fin = dat['financials'];

		let total_cost = fin['purchase'];
		if (fin['holding']) {
			total_cost += fin['holding'];
		}

		let growth = 0;
		let months;

		if (fin['sold'] && dat['sold_date']) {
			growth = fin['sold'] - total_cost;
			months = monthDiff(new Date(dat['purchase_date']), new Date(dat['sold_date']));
		} else if (fin['valued'] && dat['valued_date']) {
			growth = fin['valued'] - total_cost;
			months = monthDiff(new Date(dat['purchase_date']), new Date(dat['valued_date']));
		} else {
			months = 12;
		}

		dat['tenure_months'] = months;
		fin['growth'] = growth;
		fin['percent_appreciated'] = (total_cost + growth) / (total_cost / 100) - 100;
	}

	return data;
}

export function prepareStats(data: IProjectData[]) {
	let stats: any = [];

	let total_purchase = 0;
	let total_value_added = 0;
	let total_percent_growth = 0;

	for (let i=0; i<data.length; i++) {
		let dat = data[i];
		let fin = data[i]['financials'];

		total_purchase += fin['purchase'] + fin['growth'];
		let total_cost = fin['purchase'];
		total_cost += fin['holding']?fin['holding']:0;

		total_value_added += data[i].financials['growth'];
		let percent_growth = (total_cost + data[i].financials['growth']) / (total_cost / 100) - 100;
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
	let _growth = 0;

	for (let i=0; i<projects.length; i++) {
		let costs = projects[i].financials;

		_purchase += costs.purchase;
		_holding += costs.holding;
		_growth += costs.growth;
	}

	return { _purchase, _holding, _growth };
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

export function formatCurrencyShort(curr: any): string {
	return '$' + Intl.NumberFormat('en-US', {
		notation: "compact",
		maximumFractionDigits: 2
	  }).format(curr);
};

export interface entry {
	label: string;
	value: string;
	all?: boolean;
};

// Todo: We should grab these from actual data
export function fetchFilterData() {
	const regions: entry[] = [
		// { label: 'Australia', value: 'AUSTRALIA', all: true },
		{ label: 'NSW', value: 'NSW' },
		{ label: 'VIC', value: 'VIC' },
		{ label: 'QLD', value: 'QLD' },
		{ label: 'WA', value: 'WA' },
		{ label: 'SA', value: 'SA' },
		{ label: 'NT', value: 'NT' },
		{ label: 'ACT', value: 'ACT' },
		{ label: 'TAS', value: 'TAS' }
	];

	const ptypes: entry[] = [
		{ label: 'Owner Occupier', value: 'OWNER_OCCUPIER' },
		{ label: 'Investment', value: 'INVESTMENT' },
		{ label: 'Development', value: 'DEVELOPMENT' }
	];

	const metrics: entry[] = [
		{ label: '1 year growth', value: 'ONE_YEAR_GROWTH' },
		{ label: 'Cash-on-cash', value: 'CASH_ON_CASH' },
		{ label: 'Yield', value: 'YIELD' }
	];

	return { regions, ptypes, metrics };
}

export function fetchUniqueProperties(projects: IProjectData[], property: string) {
	return [...new Set(projects.map(project => project[property]))];
};

export function fetchUniqueStates(projects: IProjectData[]) {
	return [...new Set(projects.map(project => project.address.state))];
};

export function capitilise(name: string): string {
	return name.replace(/_/g,' ');
}

export function recentPurchase(project: IProjectData): boolean {
	if (((project.purchase_date < "2024/01/01" || project.in_progress) && project.financials.percent_appreciated < 8)) {
		return true;
	} else {
		return false;
	}
}
