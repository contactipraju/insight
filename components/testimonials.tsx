import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type TestimonialProps = {
	author: string;
	slug: string;
	testimonial: string;
	featured: boolean;
	googleProfile: string;
	avatar: string;
};

type ComponentProps = {
	testimonials: TestimonialProps[];
};

export default function Testimonials({ testimonials }: ComponentProps) {
	const allTestimonials = testimonials.filter((testimonial: TestimonialProps) => testimonial.featured);

	return (
		<section id="reviews" className="isolate py-4 sm:py-8">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<h2 className="mt-2 text-xl font-bold sm:mt-2 sm:text-2xl md:mt-4">
					Reviews
				</h2>
				<h3 className="mt-4 text-xl sm:mt-6">Our clients speak for the quality of our service, Here are a few..</h3>

				<div className="mt-4">
					<ul className="columns-xs space-y-4">
						{allTestimonials!.map((testimonial: TestimonialProps) => (
							<li key={testimonial.slug} className="break-inside-avoid">
								<div className="rounded-2xl bg-white/40 p-6 backdrop-blur sm:p-10">
									<figure className="grid gap-8">
										<figcaption className="flex items-center gap-3">
											<img
												width={40}
												height={40}
												src={testimonial.avatar}
												alt=""
												className="h-10 w-10 rounded-full object-cover"
											/>
											<div>
												<p className="text-sm font-medium leading-none">
													<a href={testimonial.googleProfile} target="_blank">{testimonial.author}</a>
												</p>
											</div>
										</figcaption>

										<blockquote className="text-l italic">
											<div dangerouslySetInnerHTML={{ __html: '"' + testimonial.testimonial + '"'}}></div>
										</blockquote>
									</figure>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
