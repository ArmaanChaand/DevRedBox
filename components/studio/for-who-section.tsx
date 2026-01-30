import { cn } from "@/lib/utils";
import { ReactNode } from "react"
import { Button } from "../ui/button";
import { MEETING_LINK } from "@/lib/info";

export default function ForWhoSection() {
    return (
        <section className="section-wrapper mx-auto text-start mt-20 space-y-8">
            <h2 className="text-balance font-bold text-2xl dual-col-p">
                This Works <span>Best If You:</span>
            </h2>
            <div className="grid sm:grid-cols-3">
                <SectionCard
                    title={<>Have a Clear Problem You&apos;re Solving</>}
                    description={<>You&apos;re not just chasing a trend — you&apos;ve identified a real pain point and know who experiences it.</>}
                />
                <SectionCard
                    title={<> Have a Budget of $5K-15K</>}
                    description={<>You&apos;re serious about validation and understand quality development isn&apos;t $500 on Fiverr.</>}
                />
                <SectionCard
                    title={<>Want Speed Over Perfection</>}
                    description={<>You&apos;d rather launch in 10 weeks with 5 features than wait 6 months for 20 features nobody asked for.</>}
                />
            </div>
            <div className="space-y-5 ml-auto w-fit">
                <p className="text-2xl font-bold dual-col-p">If this sounds like <span>you</span>, we should <span>talk</span>.</p>
                <Button className="w-56 sm:w-auto" size="lg" variant="primary" decoration={"ring"} asChild>
                    <a href={MEETING_LINK} target="_blank">
                        Book Free Consultation
                    </a>
                </Button>
            </div>
        </section>
    )
}

function SectionCard({ title, description, className }: { title: ReactNode; description: ReactNode; className?: string }) {
    return (
        <>
            <div className={cn("text-start border rounded-xl p-5 sm:p-8 sm:space-y-8 bg-secondary/20 shadow", className)}>
                <h3 className="text-xl font-bold">
                    {title}
                </h3>
                <p className="text-muted-foreground">
                    {description}
                </p>
            </div>
        </>
    )
}