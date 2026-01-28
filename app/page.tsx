import { Metadata } from "next";
import AgencyFAQsHome from "@/components/studio/studio-faq-home";
import HeroStudio from "@/components/studio/studio-hero";
import StudioPricing from "@/components/studio/studio-pricing";
import HowWeWork from "@/components/studio/howwework-section";
import { DEVREDBOX_BANNER } from "@/lib/info";
import generateStaticMetadata from "@/lib/static-metadata";
import { WebSiteMicrodata } from "@/lib/info-tsx";
import TheProblem from "@/components/studio/the-problems-section";
import ForWhoSection from "@/components/studio/for-who-section";
import WhyDevRedBox from "@/components/studio/why-devredbox";
import FooterCTA from "@/components/studio/footer-cta";

export const metadata: Metadata = generateStaticMetadata({
  title: "Welcome to DevRedBox",
  description: "Validate your SaaS idea with a production-ready MVP. We help non-tech founders build, launch and scale — book a call.",
  keywords: ["saas mvp development", "build saas mvp", "non-tech founder", "mvp development india", "nextjs development", "saas startup development", "devredbox"],
  pagePath: "/",
  og_image: DEVREDBOX_BANNER
})


export default function Home() {
  return (
    <>
      <HeroStudio />
      <TheProblem />
      <HowWeWork />
      <ForWhoSection />
      <StudioPricing />
      <WhyDevRedBox />
      <AgencyFAQsHome />
      <FooterCTA />
      <WebSiteMicrodata />
    </>
  );
}
/*

 */