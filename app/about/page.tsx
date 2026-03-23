import { DEVREDBOX_BANNER } from "@/lib/info";
import generateStaticMetadata from "@/lib/static-metadata";

export const metadata = generateStaticMetadata({
    title: "About Us | DevRedBox Studio",
    description:
        "We build SaaS and web-based apps for early-stage startups and solo founders. Learn how we started, what we build, and why we might be the right studio for your product.",
    keywords: [
        "saas mvp development",
        "about devredbox",
        "build saas mvp",
        "non-tech founder",
        "mvp development india",
        "nextjs development",
        "saas startup development",
        "devredbox",
    ],
    pagePath: "/about",
    og_image: DEVREDBOX_BANNER,
});

export default function Page() {
    return (
        <div className="min-h-screen section-wrapper max-w-2xl text-lg font-light">
            <section className="mt-28 mb-16 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:underline [&_h2]:underline-offset-2 [&_h2]:mt-8 [&_p]:mt-5">
                <h1 className="text-3xl font-semibold text-center mb-8">Get to Know us More</h1>
                <p>
                    Just like every web development agency, we started the same way. We began by helping small businesses bring their stores online. And we still do.
                </p>
                <p>
                    Since mid-2025, we have shifted our focus to building SaaS and web-based apps for early-stage startups and solo founders.
                </p>
                <h2>
                    From Small Businesses to Startups
                </h2>
                <p>
                    Since we started out building websites for small businesses, we learned how to translate what a client needs into something that actually works on screen. Over time, that foundation pushed us toward bigger challenges.
                </p>
                <p>
                    For the past year, we have been focused entirely on SaaS and web apps, working with early-stage startups and solo founders to build products from the ground up.
                </p>
                <h2>
                    What We Build
                </h2>
                <p>
                    When the idea is solid but the product doesn&apos;t exist yet, we do our best work. We take care of the build, whether it&apos;s a SaaS platform, a web app for clients, or an internal tool, so you can focus on other things.
                </p>
                <h2>
                    Our Code Library
                </h2>
                <p>
                    Over time, we&apos;ve made our own code library, which is a collection of components, tools, kits, and patterns that we&apos;ve improved on with each project we&apos;ve worked on. It means you won&apos;t have to do the same work over and over again, and you&apos;ll have more time to fix problems that are unique to your product.
                </p>
                <h2>
                    We&apos;ve Been on Your Side Too
                </h2>
                <p>
                    Because we have built our own SaaS product, we understand the decisions you&apos;re making: what to build first, what to cut, and what really matters at the beginning.
                </p>
                <h2>
                    Let&apos;s Build Something
                </h2>
                <p>
                    If you&apos;re an early-stage founder looking for a studio that can move fast without cutting corners, we&apos;d love to hear about what you&apos;re building.
                </p>
            </section>
        </div>
    );
}