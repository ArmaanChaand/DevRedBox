import { Metadata } from "next";
import HeroStudio from "@/components/studio/studio-hero";
import { DEVREDBOX_BANNER } from "@/lib/info";
import generateStaticMetadata from "@/lib/static-metadata";
import { WebSiteMicrodata } from "@/lib/info-tsx";
import AboutSection from "@/components/studio/about-section";
import ServicesSection from "@/components/studio/services-section";
import ProjectsSection from "@/components/studio/projects-section";
import ProjectSectionMobile from "@/components/studio/project-section-mobile";
import PreFooterCta from "@/components/studio/pre-footer-cta";

export const metadata: Metadata = generateStaticMetadata({
  title: "DevRedBox Studio",
  description:
    "Validate your SaaS idea with a production-ready MVP. We help non-tech founders build, launch and scale — book a call.",
  keywords: [
    "saas mvp development",
    "build saas mvp",
    "non-tech founder",
    "mvp development india",
    "nextjs development",
    "saas startup development",
    "devredbox",
  ],
  pagePath: "/",
  og_image: DEVREDBOX_BANNER,
});

export default function Home() {
  return (
    <>
      <HeroStudio />
      <div className="mb-28">
        <AboutSection />
      </div>
      <div className="mb-28">
        <ServicesSection />
      </div>
      
      <div className="mb-28 lg:mb-0">
        <ProjectSectionMobile />
        <ProjectsSection />
      </div>
      <div className="mb-28">
        <PreFooterCta />
      </div>
      
      <WebSiteMicrodata />

    </>
  );
}