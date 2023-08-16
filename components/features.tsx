import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

import featuresImage from "../public/images/features-image.png";
import featuresImageCropped from "../public/images/features-image-cropped.png";

const features = [
  {
    id: 1,
    title: `Discovery`,
    text: `We understand what matters the most for your specific investment requirements`,
  },
  {
    id: 2,
    title: `Strategy`,
    text: `We help device a strategy that aims to achieve your investment goals`,
  },
  {
    id: 3,
    title: `Research`,
    text: `We do the Search based on your Financials, Suitability, Feasibility Study, All background checks`,
  },
  {
    id: 4,
    title: `Evaluation`,
    text: `Filter and arrive at a handful of properties that match your search criteria`,
  },
  {
    id: 5,
    title: `Negotiation`,
    text: `Leaveraging our knowledge, skills and relationships to secure the property`,
  }
];

export default function Features() {
  return (
    <section id="features" className="isolate md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-y-6 px-6 md:grid-cols-2 lg:px-8">
        <div className="hidden md:block">
          <Image
            src={featuresImage}
            width={900}
            height={1600}
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="md:hidden">
          <Image
            src={featuresImageCropped}
            width={900}
            height={900}
            alt=""
            className="rounded-2xl"
          />
        </div>
        <Accordion.Root
          type="single"
          defaultValue="1"
          className="space-y-4 md:space-y-8"
        >
          {features.map((feature) => (
            <Accordion.Item
              key={feature.id}
              value={feature.id.toString()}
              className="relative rounded-2xl p-10 backdrop-blur-sm data-[state=open]:bg-white/60 data-[state=closed]:bg-white/30"
            >
              <Accordion.Header className="text-2xl font-bold leading-7">
                <span dangerouslySetInnerHTML={{ __html: feature.title }} />
              </Accordion.Header>
              <Accordion.Trigger className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-blob-2"></Accordion.Trigger>
              <Accordion.Content className="data-[state=open]:animate-fadeIn">
                <p className="mt-4">{feature.text}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
