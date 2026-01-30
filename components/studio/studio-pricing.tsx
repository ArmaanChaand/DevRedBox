import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {PricingBox, PricingBoxProps } from "@/components/studio/pricing-box";
import { MEETING_LINK } from "@/lib/info";

const PRICES: PricingBoxProps[] = [
    {
        label: "Simple MVP",
        title: "Testing a single core feature",
        price: "$5K",
        features: ["Landing page + signup flow", "2-3 core features", "Basic user authentication", "Admin panel for management", "6-8 week timeline", "Full documentation"
        ],
        example: "Example: A productivity tool with one unique workflow"
    },
    {
        label: "Standard MVP",
        title: "Market-ready SaaS product",
        price: "$8K - $12K",
        features: ["Everything in Simple MVP, plus:", "4-6 core features", "Payment/subscription integration (Stripe or other)", "Email notifications", "User dashboard", "8-10 week timeline"
        ],
        example: "Example: A B2B SaaS tool with user roles, billing, and reporting"
    },
    {
        label: "Advanced MVP",
        title: "Complex workflows or integrations",
        price: "$15K+",
        features: ["Everything in Standard MVP, plus:", "7-10 features", "Third-party API integrations", "Advanced logic/automation", "Multi-user/team features", "10-12 week timeline"
        ],
        example: "Example: A marketplace or platform with multiple user types"
    },
]

export default function StudioPricing() {
    return (
        <section className="mt-24 mx-auto section-wrapper flex flex-col justify-start items-center text-center gap-5" id="pricing">

            <Badge variant="link" className="text-sm pl-0" asChild>
                <h2>
                    Transparent Pricing
                </h2>
            </Badge>
            <p className="text-balance font-bold text-2xl sm:text-3xl">
                Every project is unique, but here&apos;s what to expect.
            </p>
            <div className="w-full grid sm:grid-cols-3 gap-5 mt-3 sm:mt-8">
                {
                    PRICES.map(price => (
                        <PricingBox
                            key={price.title}
                            label={price.label}
                            title={price.title}
                            price={price.price}
                            features={price.features}
                            example={price.example}
                        />
                    ))
                }
            </div>
            <p className="text-muted-foreground tracking-wide">
                Not sure which fits?
                {" "}
                <Button variant="link" className="px-0 !h-fit py-0 text-foreground underline underline-offset-2" asChild>
                    <a href={MEETING_LINK} target="_blank">
                        Book a free 30-min consultation
                    </a>
                </Button>
                {" "}
                and we&apos;ll scope it together.
            </p>
        </section>
    )
}