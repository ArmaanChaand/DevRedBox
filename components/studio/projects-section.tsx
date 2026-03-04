import { Button } from "@/components/ui/button";
import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Code Library",
    detail:
      "But YC doesn’t end on Demo Day. We and the YC alumni network continue to help founders for the life of their company, and beyond.",
    banner: "/projects/library.webp",
    logo: "/logos/nextjs.webp",
    link: "https://library.devredbox.in",
  },
  {
    title: "ThouHomar",
    detail:
      "But YC doesn’t end on Demo Day. We and the YC alumni network continue to help founders for the life of their company, and beyond.",
    banner: "/devredbox-banner.webp",
    logo: "/logos/supabase.svg",
    link: "https://thouhomar.xyz",
  },
];

export default function ProjectsSection() {
  return (
    <section className="hidden lg:block w-11/12 mx-auto min-h-[300vh]">
      <div className="relative flex gap-8 lg:gap-16">
        {/* Left panel */}
        <div className="flex-1">
          <div className="space-y-8 w-full">
            {PROJECTS.map((p) => (
              <div
                key={p.link}
                className="w-full aspect-[4/5] flex flex-col items-center justify-center text-center gap-5"
              >
                <h3 className="text-xl font-semibold flex items-center gap-4">
                  <Image
                    src={p.logo}
                    alt={p.title}
                    width={20}
                    height={20}
                    className="w-7 h-7 object-cover rounded-2xl"
                  />
                  {p.title}
                </h3>
                <p>{p.detail}</p>
                <Button variant={"inverted"} asChild>
                  <a href={p.link} target="_blank">
                    Visit {p.title} <SquareArrowOutUpRight />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Center sticky text */}
        <div className="w-fit flex justify-center items-start mt-20">
          <div className="sticky top-1/2 -translate-y-1/2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 underline">
              Our Projects
            </h2>
            <p className="text-base mb-4">What we&apos;ve built so far.</p>
            <Button variant={"link"} asChild>
              <Link href={"/"}>View All Projects <ChevronRight /> </Link>
            </Button>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1">
          <div className="space-y-16 w-full">
            {PROJECTS.map((p) => (
              <div key={p.logo} className="w-full aspect-[4/5]">
                <Image
                  src={p.banner}
                  alt={p.title}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
