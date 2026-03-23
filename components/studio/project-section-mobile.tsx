"use client";
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { DEVREDBOX_PROJECTS } from "@/lib/content/projects";
import { ArrowUpRight } from "lucide-react";


export default function ProjectSectionMobile() {

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )
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
        className="w-full"
        opts={{
          loop: true
        }}
        plugins={[plugin.current]}

      >
        <CarouselContent
          className="sm:w-8/12"
        >
          {DEVREDBOX_PROJECTS.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-4">
                <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden mb-1 border relative">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CarouselProgress index={index} />
                <a href={project.link} target="_blank" className="text-lg font-semibold flex items-center gap-4 mt-5 mb-2 border-b pb-2 hover:underline">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={64}
                    height={64}
                    className="w-5 h-5 object-cover"
                  />
                  {project.title}
                  <ArrowUpRight className="ml-auto text-muted-foreground size-4" />
                </a>
                <p className="text-sm text-gray-600">{project.detail}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function CarouselProgress({ index }: { index: number }) {
  const { api } = useCarousel();
  const [progress, setProgress] = useState(0);
  const delay = 5000; // matches the autoplay delay

  useEffect(() => {
    if (!api) return;

    const updateProgress = () => {
      const currentIndex = api.selectedScrollSnap();
      if (currentIndex === index) {
        const timeLeft = api.plugins().autoplay?.timeUntilNext();
        if (timeLeft !== null) {
          setProgress(((delay - timeLeft) / delay) * 100);
        } else {
          setProgress(0);
        }
      } else {
        setProgress(0);
      }
    };

    const interval = setInterval(updateProgress, 50);

    api.on('select', updateProgress);

    return () => {
      clearInterval(interval);
      api.off('select', updateProgress);
    };
  }, [api, index, delay]);

  return (
    <div className="w-full h-1 bg-foreground/50 rounded-full overflow-hidden bottom-0">
      <div className="h-full bg-foreground/90 transition-all duration-50 ease-linear" style={{ width: `${progress}%` }}></div>
    </div>
  );
}