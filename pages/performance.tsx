import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import FooterBottom from "../components/footer/footer-bottom";

import { MultiSelect } from "../components/filters/Selects";
import { MySwitch } from '../components/filters/MySwitch';
// import { BasicSelect } from "../components/filters/Selects";

import BasicStacking from '../components/widgets/Charts';
import ProjectsTiledView from "../components/projects/ProjectsTiledView";

import { IProjectData } from '../components/projects/Projects.interfaces';
import { getAllProjects, fetchFilterData, fetchUniqueProperties, fetchUniqueStates } from "../components/projects/Projects.service";

import Stats from "../components/projects/Stats";

export const RoleContext = React.createContext('admin');

export default function Performance({}: any) {
	const [projects, setProjects] = useState<IProjectData[]>([]);
	const [filtered, setFiltered] = useState<IProjectData[]>([]);

	const [filters, setFilters] = React.useState<any>({});

	const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
	const [selectedPtype,  setSelectedPtype]  = useState<string[]>([]);
	const [selectedMetric, setSelectedMetric] = useState('');
	const [role, setRole] = useState('') || undefined;
	const [checked, setChecked] = React.useState(false);

	useEffect(() => {
		getAllProjects().then((data) => {
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
		let initialRegion = stripParam(query.region, fetchUniqueStates(projects));
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

		if (query?.role?.length) {
			setRole(query.role);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		filterProperties(projects);
	}, [selectedRegion, selectedPtype, selectedMetric, checked, projects]);

	const filterProperties = (data: IProjectData[]) => {
		if (data!.length) {
			const result: IProjectData[] = data.filter((project: IProjectData) => {
				if (
					!selectedRegion.includes(project['address']['state']) || 
					!selectedPtype.includes(project['ptype']) ||
					(!checked && project['in_progress'])
				) {
					return false;
				} else {
					return true;
				}
			});
	
			setFiltered(result);
		}
	};

	return (
		<RoleContext.Provider value={role}>
			<DefaultHeaderAndBody>
				{<div className="content px-2 md:px-8 py-8 md:py-8">
					{ projects.length && <div className="inputs flex-col flex md:flex-row">
						<div className="filters">
							{filters['region'] ? <MultiSelect props={filters['region']} /> : null}
							{filters['ptype']  ? <MultiSelect props={filters['ptype']}  /> : null}
							{/* {filters['metric'] && <BasicSelect props={filters['metric']} />} */}
							{ filtered.length ? <MySwitch props={{title: 'Include projects in-progress', handleChange: handleChange, initialValue: false}}></MySwitch> : null}
						</div>

						{ filtered.length ? <div className="chart grow">
							<BasicStacking projects={filtered}/>
						</div> : null}

						{ filtered.length ? <Stats projects={filtered}/> : null}
					</div>}

					{filtered.length ? <ProjectsTiledView projects={filtered} role={router.query.role === 'admin' ? 'admin' : ''}/> : null}
				</div>}
			</DefaultHeaderAndBody>

			<FooterBottom />
		</RoleContext.Provider>
	);
}
