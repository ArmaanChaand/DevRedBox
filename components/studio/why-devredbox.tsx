import { Badge } from "../ui/badge";


export default function WhyDevRedBox() {
    return (
        <section className="mt-24 mx-auto section-wrapper grid sm:grid-cols-3 gap-2">
            <div className="col-span-2 p-5 border rounded-lg bg-secondary/20 space-y-5">
                <Badge variant="link" className="text-sm pl-0">
                    Why DevRedBox
                </Badge>
                <h2 className="text-balance font-bold text-2xl sm:text-3xl">
                    Why Founders Choose DevRedBox
                </h2>
            </div>
            <div className="border p-5 dual-col-p rounded-lg space-y-2 bg-secondary/20" >
                <h3 className="text-lg font-semibold">
                    We Speak Founder Language
                </h3>
                <p className="text-base">
                    No tech-speak. Just clear trade-offs in time, cost, and results.
                </p>
            </div>
            <div className="border p-5 dual-col-p rounded-lg space-y-2 bg-secondary/20" >
                <h3 className="text-lg font-semibold">
                    We Ship Fast
                </h3>
                <p className="text-base">
                    8-12 weeks from kickoff to launch. We <span>don&apos;t</span> drag projects out to inflate hours.
                </p>
            </div>
            <div className="border p-5 dual-col-p rounded-lg space-y-2 bg-secondary/20" >
                <h3 className="text-lg font-semibold">
                    Founder-Friendly Pricing
                </h3>
                <p className="text-base">
                    Premium Next.js development. India-based rates. No $50K invoices.
                </p>
            </div>
            <div className="border p-5 dual-col-p rounded-lg space-y-2 bg-secondary/20" >
                <h3 className="text-lg font-semibold">
                    Built for Validation
                </h3>
                <p className="text-base">
                    Your MVP is for validation, not design awards. We keep you focused.
                </p>
            </div>
        </section>
    )
}