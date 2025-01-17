// Keystatic
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";

// import BackgroundBlobs from "../components/background-blobs";
import Features from "../components/features";
import Footer, { FooterProps } from "../components/footer/footer";
import Hero, { HeroProps } from "../components/hero";
import DefaultHeaderAndBody from "../components/defaultHeaderAndBody";
import Testimonials, { TestimonialProps } from "../components/testimonials";
import Projects from "../components/projects/Projects";

type HomepageProps = {
	testimonials: TestimonialProps[];
	landingPage: HeroProps & FooterProps;
};

export default function Index({ testimonials, landingPage }: HomepageProps) {
	return (
		<>
			<DefaultHeaderAndBody>
				{/* <BackgroundBlobs /> */}
				<Hero
					data={{
						heroHeadline: landingPage.heroHeadline,
						heroIntroText: landingPage.heroIntroText,
					}}
				/>
				<Projects />
				<Testimonials testimonials={testimonials} />
				<Features />
			</DefaultHeaderAndBody>

			<Footer
				data={{
					footerHeadline: landingPage.footerHeadline,
					footerText: landingPage.footerText,
				}}
			/>
	    </>
	);
}

// Data from Keystatic
export async function getStaticProps() {
  const reader = createReader("", keystaticConfig);

  // Testimonials
  const testimonialSlugs = await reader.collections.testimonials.list();
  const testimonials = await Promise.all(
    testimonialSlugs.map(async (slug) => {
      const testimonial = await reader.collections.testimonials.read(slug);
      return { ...testimonial, slug };
    })
  );

  // Landing page content
  const landingPage = await reader.singletons.landingPage.read();

  return {
    props: {
      testimonials,
      landingPage,
    },
  };
}
