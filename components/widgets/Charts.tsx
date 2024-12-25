import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { BarChart } from '@mui/x-charts/BarChart';
import { IProjectData } from '../projects/Projects.interfaces';

export type BasicStackingProps = {
	projects: IProjectData[];
};
export type series = {
	label: string;
	data: number[];
};

export default function BasicStacking({ projects }:BasicStackingProps) {
	const [loading, setLoading] = useState(true);

	const [purchase, setPurchase] = useState({});
	const [holding, setHolding] = useState({});
	const [appreciation, setAppreciation] = useState({});

	const prepChartData = () => {
		const purchase: series = {
			label: 'Purchase cost',
			data: []
		};
		const holding: series = {
			label: 'Holding costs',
			data: []
		};
		const appreciation: series = {
			label: 'Value addition',
			data: []
		};

		for (let i=0; i<projects.length; i++) {
			purchase.data.push(projects[i].financials.purchase_cost);
			holding.data.push(projects[i].financials.holding_costs?projects[i].financials.holding_costs:0);
			appreciation.data.push(projects[i].financials.appreciation);
		}

		setPurchase(purchase);
		setHolding(holding);
		setAppreciation(appreciation);
	}

	useEffect(() => {
		prepChartData();
		setLoading(false);
	}, [projects]);

	return (
		<>
			{ !loading && <BarChart
				sx={{padding:'15px'}}
				height={400}
				series={[
					{ ...purchase, stack: 'total' },
					{ ...holding, stack: 'total' },
					{ ...appreciation, stack: 'total' }
				]}
			/> }
		</>
	)
}
