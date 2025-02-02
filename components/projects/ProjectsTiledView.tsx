// import Link from "next/link";

import { IProjectData } from "./Projects.interfaces";

import ProjectDetailed from "./ProjectDetailed";

export type TiledViewProps = {
	projects: IProjectData[];
};

const ProjectsTiledView = ({ projects }: TiledViewProps) => {

	return (
		<section id="projects" className='isolate py-4 sm:py-8'>
			<div className="mx-auto px-2">
				<h2 className="my-2 max-w-2xl text-2xl font-bold sm:my-2 sm:text-4xl md:my-4 mx-8">
					{/* Deals */}
				</h2>

				<div className="projects flex flex-wrap justify-around">
					{projects!.length > 0 ? projects!.map((project: IProjectData) => (
						// <Link key={project.id} href={`/project/${encodeURIComponent(project.id)}`}>
							<ProjectDetailed key={project.id} project={project} />
						// </Link>
					)) : <div>{"No projects available"}</div> }
				</div>
			</div>
		</section>
	)
}

export default ProjectsTiledView;
