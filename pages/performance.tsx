import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

import { MultiSelect } from "../components/filters/Selects";
// import { BasicSelect } from "../components/filters/Selects";

import BasicStacking from '../components/widgets/Charts';
import ProjectsTiledView from "../components/projects/ProjectsTiledView";

import { IProjectData } from '../components/projects/Projects.interfaces';
import { getProjectsLocal, fetchFilterData, fetchUniqueProperties } from "../components/projects/Projects.service";

import Stats from "../components/projects/Stats";

export default function Performance({}: any) {
	const [projects, setProjects] = useState<IProjectData[]>([]);
	const [filtered, setFiltered] = useState<IProjectData[]>([]);

	const [filters, setFilters] = React.useState<any>({});

	const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
	const [selectedPtype,  setSelectedPtype]  = useState<string[]>([]);
	const [selectedMetric, setSelectedMetric] = useState('');

	useEffect(() => {
		getProjectsLocal().then((data) => {
			setProjects(data);
		});
	}, []);

	const router = useRouter();

	const { regions, ptypes, metrics } = fetchFilterData();

	useEffect(() => {
		if (router.query && projects.length) {
			// Delaying so that router.query is loaded
			const timer = setTimeout(() => {
				console.log('router.query ready: ', router);
				initializeFilters(router.query, projects);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [router.query, projects]);

	const stripParam = (key: any, def: any) => {
		return key ? (key as string).split(',') : def;
	};

	const initializeFilters = (query: any, projects: IProjectData[]) => {
		// Read Params (or Defaults): Filters (Region, Type, Metric), Sort field, View mode
		let initialRegion = stripParam(query.region, fetchUniqueProperties(projects, 'region'));
		setSelectedRegion(initialRegion);

		let initialPtype  = stripParam(query.ptype,  fetchUniqueProperties(projects, 'ptype'));
		setSelectedPtype(initialPtype);

		let initialMetric = stripParam(query.metric, 'ONE_YEAR_APPRECIATION');
		setSelectedMetric(initialMetric);

		setFilters({
			region: { title: 'Region',        entries: regions, handleChange: (e: any) => setSelectedRegion(e.target.value), preset: initialRegion },
			ptype:  { title: 'Property type', entries: ptypes,  handleChange: (e: any) => setSelectedPtype(e.target.value),  preset: initialPtype },
			metric: { title: 'Metric',        entries: metrics, handleChange: (e: any) => setSelectedMetric(e.target.value), preset: initialMetric }
		});
	};

	useEffect(() => {
		filterProperties(projects);
	}, [selectedRegion, selectedPtype, selectedMetric, projects]);

	const filterProperties = (data: IProjectData[]) => {
		if (data!.length) {
			const result: IProjectData[] = data.filter((project: IProjectData) => {
				return selectedRegion.includes(project['region']) && selectedPtype.includes(project['ptype']);
			});
	
			setFiltered(result);
		}
	};

	return (
		<>
			<DefaultHeaderAndBody>
				{<div className="content px-2 md:px-8 py-8 md:py-8">
					{ projects.length && <div className="inputs flex-col flex md:flex-row">
						<div className="filters">
							{filters['region'] && <MultiSelect props={filters['region']} />}
							{filters['ptype']  && <MultiSelect props={filters['ptype']}  />}
							{/* {filters['metric'] && <BasicSelect props={filters['metric']} />} */}
						</div>

						{ filtered.length && <div className="chart grow">
							<BasicStacking projects={filtered}/>
						</div>}

						{ filtered.length && <Stats projects={filtered}/> }
					</div>}

					{filtered.length && <ProjectsTiledView projects={filtered}/>}
				</div>}
			</DefaultHeaderAndBody>

			<FooterBottom />
		</>
	);
}
