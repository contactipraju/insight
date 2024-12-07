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

	const prepareStats = (data: IProjectData[]) => {
		let stats: any = [];

		const worth_bought = data.reduce(function (acc: any, obj: IProjectData) { return acc + obj.financials['purchase_cost']; }, 0);
		const worth_current = data.reduce(function (acc: any, obj: IProjectData) { return acc + obj.financials['current_value']; }, 0);
		const value_added = worth_current - worth_bought;

		stats.push({title: 'Happy families (and growing..)', value: data.length});
		stats.push({title: 'Worth of properties bought', value: formatCurrencyShort(worth_bought), tool: worth_bought});
		stats.push({title: 'Total value added', value: formatCurrencyShort(value_added), tool: value_added});

		setStats(stats);
	}

	return (
		<div id="stats" className='hidden md:block fixed top-32 right-1 w-50 flex flex-col p-1 gap-y-4 items-center justify-between border-2 border-[#f79727]'>
			{stats!.length > 0 ? stats!.map((stat: any, i: number) => (
				<div className="text-center p-2 m-2 bg-[#ffffff]" key={i}>
					<div className="font-bold text-3xl text-[#f79727] py-2">
						{stat.value}
					</div>
					<h2 className="w-32 ml-auto mr-auto font-bold text-l max-w-2xl py-2">
						{stat.title}
					</h2>
				</div>
			)) : <div></div> }
		</div>
	)
}

export default Stats;
