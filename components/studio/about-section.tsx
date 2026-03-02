import { Button } from "@/components/ui/button";
import { DevRedBoxLogoRaw } from "@/components/ui/devredbox-logo";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-wrapper bg-foreground text-background p-8 rounded-2xl space-y-8">
      <h2 className="text-3xl font-black flex items-center flex-wrap">
        We at{" "}
        <span className="p-3 rounded-xl inline-block bg-background ml-3 mr-2">
          <DevRedBoxLogoRaw className="text-foreground w-16" />
        </span>
        builds, launch & scale SaaS MVPs for solo founders.
      </h2>
      <div className="grid md:grid-cols-2 gap-5 rounded-xl overflow-hidden">
        <div className="bg-[#1c1c1c] p-5">
          <h3 className="text-xs text-muted-foreground ">THEN</h3>
          <p>
            Businesses with a great product but a website that didn't do it
            justice. We fixed that — and we still do.
          </p>
        </div>
        <div className="bg-[#1c1c1c] p-5">
          <h3 className="text-xs text-muted-foreground">NOW</h3>
          <p>
            Founders with a great idea for software but no time to learn a new
            tool, hire a team, or figure out AI on their own. We build the MVP.
            They run the business.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto space-y-5">
        <p className="text-xl text-start italic">
          "I started this studio to help non-technical founders or solo founders
          develop SaaS products without needing to learn technical terms."
        </p>
        <p className="text-end">— Armaan Chaand</p>
        <div className="w-full flex ">
          <Button variant={"default"} className="h-fit w-full max-w-xs font-semibold mx-auto">
            <Image
              src="/armaan-chaand.webp"
              alt="Armaan Chaand"
              className="object-cover w-10 h-10 rounded-full shrink-0"
              width={64}
              height={64}
            />
            Talk with Armaan
          </Button>
        </div>
      </div>
    </section>
  );
}
