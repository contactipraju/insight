import './Projects.scss';

import { useState, useEffect } from "react";

import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IProjectData } from "./Projects.interfaces";
import { getProjectsLocal } from "./Projects.service";

const Projects = (props: any) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjectsLocal().then((resp) => {
			console.log('Projects Loaded: ', resp);
			setProjects(resp.data);
		});
	}, []);

	return (
		<section id="projects" className='isolate py-4 sm:py-8'>
			<div className="mx-auto md:px-6 lg:px-8">
				<h2 className="my-2 max-w-2xl text-2xl font-bold sm:my-2 sm:text-4xl md:my-4 mx-8 lg:ml-28">
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
						spaceBetween: 40,
						},
						1400: {
						slidesPerView: 3,
						spaceBetween: 50,
						},
					}}
				>
					{projects!.length > 0 ? projects!.map((project: IProjectData) => (
						<SwiperSlide key={project.id}>
							<div className="project">
								<div className="details">
									<div className='title'>
										<div className="type">{project.type}</div>

										<div className="location" style={{ backgroundImage: `url(images/portfolio/location.png)` }}>
											{project.location}
										</div>
									</div>

									<div className="name">{project.name}</div>

									<div className="images" style={{ backgroundImage: `url(${project.images![0]})` }}></div>

									<div className="features">
										<ul>
											{project.features.map(item => {
												return <li key={item}>{item}</li>;
											})}
										</ul>
									</div>

									<div className="financials">
										<table>
											<thead>
												<tr>
													<th className="text">Financials</th>
													<th className="amount">(AUD)</th>
												</tr>
											</thead>
											<tbody>
											{
												Object.keys(project.financials).map((key: any, i: any) => (
													<tr key={i}>
														<td className="text">{key.replace(/_/g,' ')}</td>
														<td className="amount">{project.financials[key]}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>

									<div className="success">
										<ul>
											{project.success.map(item => {
												return <li key={item}>{item}</li>;
											})}
										</ul>
									</div>
								</div>
							</div>
						</SwiperSlide>
					)) : <div>{"No projects available"}</div> }
				</Swiper>
			</div>
		</section>
	)
}

export default Projects;
