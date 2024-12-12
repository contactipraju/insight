import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

import { MultiSelect } from "../components/filters/Selects";
import { BasicSelect } from "../components/filters/Selects";

import ProjectsTiled from "../components/projects/ProjectsTiled";

export interface entry {
	label: string;
	value: string;
	all?: boolean;
};

function fetchFilterData() {
	const regions: entry[] = [
		{ label: 'Australia', value: 'AUSTRALIA', all: true },
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
		{ label: 'All', value: 'ALL', all: true },
		{ label: 'Freestanding', value: 'FREESTANDING' },
		{ label: 'Granny Potential', value: 'GRANNYPOTENTIAL' },
		{ label: 'Subdivision', value: 'SUBDIZVISION' },
		{ label: 'Townhouse', value: 'TOWNHOUSE' },
		{ label: 'Renovation', value: 'RENOVATION' },
		{ label: 'Townhouse Potential', value: 'TOWNHOUSEPOTENTIAL' },
		{ label: 'Unit', value: 'UNIT' },
		{ label: 'Knock-down Rebuild', value: 'KDR' },
	];

	const metrics: entry[] = [
		{ label: '1 year appreciation', value: 'ONE_YEAR_APPRECIATION' },
		{ label: 'Cash-on-cash', value: 'CASH_ON_CASH' },
		{ label: 'Yield', value: 'YIELD' }
	];

	return { regions, ptypes, metrics };
}

export default function Performance({}: any) {
	const router = useRouter();

	const [filters, setFilters] = React.useState<any>({});

	// Default Options: Should we grab these from actual data??
	const { regions, ptypes, metrics } = fetchFilterData();

	const stripParam = (key: any, def: any) => {
		return key ? (key as string).split(',') : def;
	};

	// Read Params (or Defaults): Filters (Region, Type, Metric), Sort field, View mode
	const prepareFilters = () => {
		setFilters({
			region: { title: 'Region',        entries: regions, preset: stripParam(router.query.region, ['AUSTRALIA']) },
			ptype:  { title: 'Property type', entries: ptypes,  preset: stripParam(router.query.ptype, ['ALL']) },
			metric: { title: 'Metric',        entries: metrics, preset: stripParam(router.query.metric, 'ONE_YEAR_APPRECIATION') },
		});
	}

	useEffect(() => {
		if (router.query.region) {
			prepareFilters();
		}
	}, [router]);

	// On any filter change:

	return (
		<>
			<DefaultHeaderAndBody>
				<div className="content pt-24">
					<div className="inputs">
						<div className="filters">
							{filters['region'] && <MultiSelect props={filters['region']}/>}
							{filters['ptype'] && <MultiSelect props={filters['ptype']}/>}
							{filters['metric'] && <BasicSelect props={filters['metric']}/>}
						</div>

						<div className="chart">
						</div>
					</div>

					<ProjectsTiled />
				</div>
			</DefaultHeaderAndBody>

			<FooterBottom />
		</>
	);
}
