import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import { BarChart } from '@mui/x-charts/BarChart';
import { IProjectData } from '../projects/Projects.interfaces';
import { formatCurrencyShort } from '../projects/Projects.service';

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
			label: 'Purchase',
			data: []
		};
		const holding: series = {
			label: 'Holding',
			data: []
		};
		const appreciation: series = {
			label: 'Appreciation',
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
				sx={{ "& .MuiChartsLegend-series tspan": { fontSize: "0.8em" }, padding:'5px' }}
				yAxis={[
					{
						scaleType: 'linear',
						valueFormatter: (value, context) => formatCurrencyShort(value)
					}
				]}
				height={400}
				series={[
					{ ...purchase,     stack: 'total', color: '#999' },
					{ ...holding,      stack: 'total', color: '#3f7cac' },
					{ ...appreciation, stack: 'total', color: '#f79727' }
				]}
				barLabel={(item, context) => {
					if ((!isMobile || projects.length < 6) && item.value) {
						return formatCurrencyShort(item.value)
					}
				}}
			/> }
		</>
	)
}
