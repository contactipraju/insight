import { useState, useEffect } from "react";

import { IProjectData } from "./Projects.interfaces";
import { prepareStats } from "./Projects.service";

export type StatsProps = {
	projects: IProjectData[];
};

export default function Stats ({projects}: StatsProps): any  {
	const [stats, setStats] = useState([]);

	useEffect(() => {
		setStats(prepareStats(projects));
	}, [projects]);

	return (
		<div id="stats" className='md:block w-50 flex flex-row md:flex-col gap-y-4 items-center justify-between border border-[#f79727]'>
			{stats!.length > 0 ? stats!.map((stat: any, i: number) => (
				<div className="text-center p-2 m-2 bg-[#ffffff]" key={i}>
					<div className="font-bold text-2xl text-[#f79727] py-2">
						{stat.value}
					</div>
					<div className="w-16 md:w-32 ml-auto mr-auto font-medium text-l max-w-2xl py-2">
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
