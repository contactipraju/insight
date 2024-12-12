import { useState, useEffect } from "react";
import Link from "next/link";

import { IProjectData } from "./Projects.interfaces";
import { getProjectsLocal } from "./Projects.service";

import Project from "./Project";

const Projects = (props: any) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjectsLocal().then((data) => {
			setProjects(data);
		});
	}, []);

	return (
		<section id="projects" className='isolate py-4 sm:py-8'>
			<div className="mx-auto md:px-6 lg:px-8">
				<h2 className="my-2 max-w-2xl text-2xl font-bold sm:my-2 sm:text-4xl md:my-4 mx-8 lg:ml-28">
					{/* Deals */}
				</h2>

				<div className="projects flex flex-wrap justify-around">
					{projects!.length > 0 ? projects!.map((project: IProjectData) => (
							<Link href={`/project/${encodeURIComponent(project.id)}`}>
								<Project project={project} />
							</Link>
						)) : <div>{"No projects available"}</div> }
				</div>
			</div>
		</section>
	)
}

export default Projects;
