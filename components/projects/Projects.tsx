import { useState, useEffect } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IProjectData } from "./Projects.interfaces";
import { getPublicProjects } from "./Projects.service";

import Project from "./Project";

const Projects = (props: any) => {
	const [projects, setProjects] = useState<IProjectData[]>([]);

	useEffect(() => {
		getPublicProjects().then((data: IProjectData[]) => {
			setProjects(data);
		});
	}, []);

	return (
		<section id="projects" className='isolate py-4 sm:py-8'>
			<div className="mx-auto max-w-6xl md:px-6 lg:px-8">
				<h2 className="my-2 max-w-2xl text-2xl font-bold sm:my-2 sm:text-4xl md:my-4 mx-8">
					Projects
				</h2>
				<Swiper
					modules={[Autoplay, Pagination, Navigation]}
					slidesPerView={1}
					navigation
					pagination={true}
					loop={true}
					autoplay={true}
					breakpoints={{
						800: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1400: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
				>
					{projects!.length > 0 ? projects!.map((project: IProjectData) => (
						<SwiperSlide key={project.id}>
							{/* <Link href={`/projects/${encodeURIComponent(project.id)}`}> */}
								<Project project={project} />
							{/* </Link> */}
						</SwiperSlide>
					)) : <div>{"No projects available"}</div> }
				</Swiper>
			</div>
		</section>
	)
}

export default Projects;
