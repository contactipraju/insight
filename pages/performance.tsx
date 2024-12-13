import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

import { MultiSelect } from "../components/filters/Selects";
import { BasicSelect } from "../components/filters/Selects";

import BasicStacking from '../components/widgets/Charts';
import ProjectsTiled from "../components/projects/ProjectsTiled";

import { IProjectData } from '../components/projects/Projects.interfaces';
import { getProjectsLocal } from "../components/projects/Projects.service";

import Aggregates from '../components/widgets/Aggregates';

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

	// Since it takes few milliseconds to load router values...
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const [projects, setProjects] = useState<IProjectData[]>([]);

	useEffect(() => {
		getProjectsLocal().then((data) => {
			setProjects(data);
		});
	}, []);

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
		if (router.query) {
			prepareFilters();
		}
	}, [router.query]);

	// On any filter change:

	return (
		<>
			<DefaultHeaderAndBody>
				<div className="content pt-24">
					{ !loading && <div className="inputs flex flex-row">
						<div className="filters">
							{filters['region'] && <MultiSelect props={filters['region']}/>}
							{filters['ptype'] && <MultiSelect props={filters['ptype']}/>}
							{filters['metric'] && <BasicSelect props={filters['metric']}/>}
						</div>

						{ projects.length && <div className="chart grow">
							<BasicStacking projects={projects}/>
						</div>}

						{ projects.length && <Aggregates projects={projects}/> }
					</div>}

					{projects.length && <ProjectsTiled />}
				</div>
			</DefaultHeaderAndBody>

			<FooterBottom />
		</>
	);
}
