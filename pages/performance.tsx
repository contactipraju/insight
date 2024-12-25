import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

import { MultiSelect } from "../components/filters/Selects";
import { BasicSelect } from "../components/filters/Selects";

import BasicStacking from '../components/widgets/Charts';
import ProjectsTiledView from "../components/projects/ProjectsTiledView";

import { IProjectData } from '../components/projects/Projects.interfaces';
import { getProjectsLocal } from "../components/projects/Projects.service";

import Stats from "../components/projects/Stats";

export interface entry {
	label: string;
	value: string;
	all?: boolean;
};

function fetchFilterData() {
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
		{ label: '1 year appreciation', value: 'ONE_YEAR_APPRECIATION' },
		{ label: 'Cash-on-cash', value: 'CASH_ON_CASH' },
		{ label: 'Yield', value: 'YIELD' }
	];

	return { regions, ptypes, metrics };
}

export default function Performance({}: any) {
	const [projects, setProjects] = useState<IProjectData[]>([]);
	const [filtered, setFiltered] = useState<IProjectData[]>([]);

	const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
	const [selectedPtype,  setSelectedPtype] = useState<string[]>([]);
	const [selectedMetric, setSelectedMetric] = useState('');

	useEffect(() => {
		getProjectsLocal().then((data) => {
			console.log('PROJECTS loaded');
			setProjects(data);
			filterProperties(data);
		});
	}, []);

	const router = useRouter();

	// Since it takes few milliseconds to load router values...
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			console.log('LOADING ready');
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	const [filters, setFilters] = React.useState<any>({});

	// Default Options: Should we grab these from actual data??
	const { regions, ptypes, metrics } = fetchFilterData();

	const stripParam = (key: any, def: any) => {
		return key ? (key as string).split(',') : def;
	};

	useEffect(() => {
		if (router.query) {
			console.log('router.query ready');

			// Read Params (or Defaults): Filters (Region, Type, Metric), Sort field, View mode
			let initialRegion = stripParam(router.query.region, ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'NT', 'ACT', 'TAS']);
			let initialPtype  = stripParam(router.query.ptype,  ['OWNER_OCCUPIER', 'INVESTMENT', 'DEVELOPMENT']);
			let initialMetric = stripParam(router.query.metric, 'ONE_YEAR_APPRECIATION');

			setSelectedRegion(initialRegion);
			setSelectedPtype(initialPtype);
			setSelectedMetric(initialMetric);

			setFilters({
				region: { title: 'Region',        entries: regions, handleChange: (e: any) => setSelectedRegion(e.target.value), preset: initialRegion },
				ptype:  { title: 'Property type', entries: ptypes,  handleChange: (e: any) => setSelectedPtype(e.target.value),  preset: initialPtype },
				metric: { title: 'Metric',        entries: metrics, handleChange: (e: any) => setSelectedMetric(e.target.value), preset: initialMetric }
			});
		}
	}, [router.query]);

	useEffect(() => {
		filterProperties(projects);
	}, [selectedRegion, selectedPtype, selectedMetric]);

	// On any filter change:
	const filterProperties = (data: IProjectData[]) => {
		// console.log('filtering for: ', selectedRegion, selectedPtype, selectedMetric);

		if (data!.length) {
			const result: IProjectData[] = data.filter((project: IProjectData) => {
				return selectedRegion.includes(project['location']) && selectedPtype.includes(project['ptype']);
			});
	
			setFiltered(result);
		}
	};

	return (
		<>
			<DefaultHeaderAndBody>
				{<div className="content p-8">
					{ !loading && <div className="inputs flex flex-row">
						<div className="filters">
							{filters['region'] && <MultiSelect props={filters['region']} />}
							{filters['ptype']  && <MultiSelect props={filters['ptype']}  />}
							{filters['metric'] && <BasicSelect props={filters['metric']} />}
						</div>

						{ filtered.length && <div className="chart grow mx-6">
							<BasicStacking projects={filtered}/>
						</div>}

						{ filtered.length && <Stats projects={filtered}/> }
					</div>}

					{!loading && filtered.length && <ProjectsTiledView projects={filtered}/>}
				</div>}
			</DefaultHeaderAndBody>

			<FooterBottom />
		</>
	);
}
