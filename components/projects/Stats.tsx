import { useState, useEffect } from "react";

import { IProjectData } from "./Projects.interfaces";
import { getProjectsLocal } from "./Projects.service";

const formatCurrencyLong = (curr: any) => {
	return '$' + Number(curr.toFixed(0)).toLocaleString();
};

const formatCurrencyShort = (curr: any) => {
	return Intl.NumberFormat('en-US', {
		notation: "compact",
		maximumFractionDigits: 1
	  }).format(curr);
};

const Stats = (props: any) => {
	const [projects, setProjects] = useState<IProjectData[]>([]);
	const [stats, setStats] = useState([]);

	useEffect(() => {
		getProjectsLocal().then((data: IProjectData[]) => {
			setProjects(data);
			prepareStats(data);
		});
	}, []);

	function monthDiff(d1: Date, d2: Date) {
		if (!d1 || !d2)
			return 0;

		var months;
		months = (d2.getFullYear() - d1.getFullYear()) * 12;
		months -= d1.getMonth();
		months += d2.getMonth();
		return months <= 0 ? 0 : months;
	}

	const prepareStats = (data: IProjectData[]) => {
		let stats: any = [];

		let total_purchase = 0;
		let total_value_added = 0;
		let total_percent_growth = 0;

		for (let i=0; i<data.length; i++) {
			let dat = data[i];
			let fin = data[i]['financials'];

			total_purchase += fin['purchase_cost'];
			let total_cost = fin['purchase_cost'];
			total_cost += fin['holding_costs']?fin['holding_costs']:0;

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

			total_value_added += appreciation;
			let percent_growth = (total_cost + appreciation) / (total_cost / 100) - 100;
			total_percent_growth += percent_growth;
		}

		stats.push({title: 'Happy families (and growing..)', value: data.length});
		stats.push({title: 'Worth of properties bought', value: formatCurrencyShort(total_purchase), tool: total_purchase});
		stats.push({title: 'Total value added', value: formatCurrencyShort(total_value_added), tool: total_value_added});
		stats.push({title: 'Avg. annual growth %', value: (total_percent_growth/data.length).toFixed(2) + '%'});

		setStats(stats);
	}

	return (
		<div id="stats" className='hidden md:block fixed top-32 right-1 w-50 flex flex-col p-1 gap-y-4 items-center justify-between border border-[#f79727]'>
			{stats!.length > 0 ? stats!.map((stat: any, i: number) => (
				<div className="text-center p-2 m-2 bg-[#ffffff]" key={i}>
					<div className="font-bold text-3xl text-[#f79727] py-2">
						{stat.value}
					</div>
					<div className="w-32 ml-auto mr-auto font-medium text-l max-w-2xl py-2">
						{stat.title}
					</div>
				</div>
			)) : <div></div> }

			{/* This won't work by default, as it's inside relative element */}
			{/* <div className="links hidden sm:flex ml-8">
				<a href="/performance" className="rounded-full px-5 py-2.5 font-small text-white bg-gray-700 hover:bg-gray-700 whitespace-nowrap"> Performance </a>
			</div> */}
		</div>
	)
}

export default Stats;
