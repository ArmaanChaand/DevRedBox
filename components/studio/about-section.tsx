import DeveloperDialog from "@/components/studio/developer-dialog";
import { DevRedBoxLogoRaw } from "@/components/ui/devredbox-logo";

export default function AboutSection() {
  return (
    <section className="section-wrapper bg-foreground text-background p-5 sm:p-8 rounded-2xl space-y-8">
      <h2 className="text-2xl sm:text-3xl font-black flex items-center flex-wrap gap-2">
        <span>We</span> <span>at</span>
        <span className="p-2 sm:p-3 rounded-xl inline-block bg-background">
          <DevRedBoxLogoRaw className="text-foreground w-14 sm:w-16" />
        </span>
        <span>builds,</span> <span>launch</span> <span>&amp;</span> <span>scale</span> <span>SaaS</span> <span>MVPs</span> <span>for</span> <span>solo</span> <span>founders.</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-5 rounded-xl overflow-hidden">
        <div className="bg-[#1c1c1c] p-5">
          <h3 className="text-xs text-muted-foreground ">THEN</h3>
          <p>
            Businesses with a great product but a website that didn&apos;t do it
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
          &quot;I started this studio to help non-technical founders or solo founders
          develop SaaS products without needing to learn technical terms.&quot;
        </p>
        <p className="text-end">— Armaan Chaand</p>
        <div className="w-full flex ">
          <DeveloperDialog />
        </div>
      </div>
    </section>
  );
}
