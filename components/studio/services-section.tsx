import StaggeredSpan from "@/components/ui/staggered-span";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="section-wrapper space-y-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-muted-foreground text-center">
        <span className="text-foreground underline underline-offset-2">
          Our Services.
        </span>{" "}
        What we specialize in?
      </h2>
      <p className="text-center flex justify-center items-center flex-wrap gap-1.5 text-lg sm:text-xl font-medium max-w-6xl mx-auto">
        <StaggeredSpan>
          We build web-based SaaS products from the ground up — an MVP or pick
          up where from where you left off. We use
        </StaggeredSpan>
        <ImgSpan src={"/logos/nextjs.webp"} title="NextJs" />
        <ImgSpan src={"/logos/react.svg"} title="ReactJs" />
        <span>and</span>
        <ImgSpan
          src={"/logos/shadcn.webp"}
          title="shadcn/ui"
          imgCn="rounded-full"
        />
        <StaggeredSpan>
          to develop the SaaS. And to power it we prefer
        </StaggeredSpan>
        <span className="inline-flex items-center gap-1 bg-foreground text-sm py-1 px-2 rounded-xl">
          <Image
            src={"/logos/firebase.svg"}
            alt="Firebase"
            className="shrink-0 flex-none w-16 h-5"
            width={20}
            height={20}
          />{" "}
          <span className="sr-only">Firebase</span>
        </span>
        <span>and/or</span>
        <ImgSpan src={"/logos/supabase.svg"} imgCn="w-4 h-5" title="Supabase" />
        <StaggeredSpan>
          If your SaaS demands a browser extension or the SaaS itself is a
        </StaggeredSpan>
        <ImgSpan
          src={"/logos/chrome.svg"}
          imgCn="w-4 h-4"
          title="Browser Extension"
        />
        <StaggeredSpan>
          then we&apos;ll build it as well. Alongwith these we also offer
          landing pages that convert built in Framer or Webflow for high-end
          styling.
        </StaggeredSpan>
      </p>
    </section>
  );
}

export function ImgSpan({
  src,
  title,
  imgCn,
  className,
}: {
  src: string;
  title: string;
  imgCn?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 bg-foreground text-background text-sm px-2 py-1 rounded-xl font-normal",
        className,
      )}
    >
      <Image
        src={src}
        alt={title}
        className={cn("shrink-0 flex-none w-5 h-5", imgCn)}
        width={20}
        height={20}
      />{" "}
      {title}
    </span>
  );
}
