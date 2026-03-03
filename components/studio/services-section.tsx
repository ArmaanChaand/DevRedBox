import { ReactNode } from "react";

export default function ServicesSection() {
  return (
    <section className="section-wrapper space-y-5">
      <h2 className="text-2xl md:text-3xl font-black text-muted-foreground">
        <span className="text-foreground">Our Services.</span> What we
        specialize in?
      </h2>
      <p className="text-lg max-w-xl">
        In one line, we build SaaS which runs on the web. Along with that we
        build chrome extensions if the SaaS requires it.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <ServiceItem
          title="SaaS Development"
          description="We build SaaS MVPs using Next.js, React, and the modern tools that surround them. Picking up where someone left off or building from the ground up, we're equally at home either way."
        />
        <ServiceItem
          title="Chrome Extensions"
          description="If your SaaS requires a browser extension, we develop it and consider it part of the project. Or maybe your SaaS is a browser extension in the first place."
        />
        <ServiceItem
          title="Web Development"
          description="Every SaaS needs a web presence — a landing page that converts, a pricing page that sells, and authentication flows that just work. We design and build all of it, pixel by pixel."
        />
      </div>
    </section>
  );
}

export function ServiceItem({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold underline">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
