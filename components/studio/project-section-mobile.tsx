"use client";
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Code Library",
    detail:
      "But YC doesn't end on Demo Day. We and the YC alumni network continue to help founders for the life of their company, and beyond.",
    banner: "/projects/library.webp",
    logo: "/logos/nextjs.webp",
    link: "https://library.devredbox.in",
  },
  {
    title: "ThouHomar",
    detail:
      "But YC doesn't end on Demo Day. We and the YC alumni network continue to help founders for the life of their company, and beyond.",
    banner: "/devredbox-banner.webp",
    logo: "/logos/supabase.svg",
    link: "https://thouhomar.xyz",
  },
];

export default function ProjectSectionMobile() {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000); // Auto-slide every 3 seconds
    };

    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };

    startAutoplay();

    api.on("select", () => {
      stopAutoplay();
      startAutoplay(); // Reset timer on user interaction
    });

    return () => {
      stopAutoplay();
      api.off("select", () => {
        console.log("Remove Card")
      });
    };
  }, [api]);

  return (
    <section className="w-11/12 mx-auto lg:hidden ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-muted-foreground text-center">
        <span className="text-foreground underline underline-offset-2">
          Projects.
        </span>{" "}
        We built by now.
      </h2>
      <p className="text-center mb-8 mt-5">
        DevRedBox has built a very limited number of projects by now. This shall grow by time.
      </p>
      <Carousel
        setApi={setApi} className="w-full" opts={{
          loop: true
        }}

      >
        <CarouselContent
          className="sm:w-8/12"
        >
          {PROJECTS.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-4">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4 border">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.detail}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}