import { Button } from "@/components/ui/button";
import { IconLinkedIn, IconTwitter } from "@/components/ui/icons";
import { TypographyBlockquote } from "@/components/ui/typography/blockquote";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export default function DeveloperSection() {
  return (
    <section className="section-wrapper border p-5 sm:p-8 rounded-xl flex justify-between gap-8">
      <div className="">
        <h2 className="text-2xl font-black text-muted-foreground"><span className="text-foreground">Say Hello</span> to the developer in charge</h2>
        <div className="flex flex-col sm:flex-row items-stretch mt-8 gap-8 shrink-0">
          <div className="relative mx-auto min-h-56 w-56 flex-shrink-0">
            <Image
              src="/armaan-chaand.webp"
              alt="Armaan Chaand"
              fill
              className="object-cover rounded"
              sizes="512px"
              priority
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-muted-foreground text-xl font-bold">
              <span className="text-foreground">Armaan Chaand.</span> Founder & Developer
            </h3>

            <TypographyBlockquote className="text-lg">
              &quot;I design, build, and ship internal tools and SaaS MVPs under DevRedBox Studio –
              taking full responsibility from idea to deployment.
              <br />
              I’ve shipped real products using Next.js, Firebase, and modern frontend tooling —
              the same stack your product will be built on.&quot;
            </TypographyBlockquote>
            <div className="w-full grid grid-cols-2 sm:flex justify-start items-center gap-6">
              <Button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 " size={"xl"} variant={"inverted"} asChild>
                <a href="http://linkedin.com/in/armaanchaand/" target="_blank">
                  <IconLinkedIn />
                  LinkedIn
                  <SquareArrowOutUpRight className="size-3" />
                </a>
              </Button>

              <Button className="bg-[#000000] hover:bg-[#000000]/90 " size={"xl"} variant={"inverted"} asChild>
                <a href="https://x.com/devredbox" target="_blank">
                  <IconTwitter />
                  Twitter
                  <SquareArrowOutUpRight className="size-3" />
                </a>
              </Button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}