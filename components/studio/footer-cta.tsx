import { Button } from "@/components/ui/button";
import { DEVREDBOX_CONTACT_EMAIL, MEETING_LINK } from "@/lib/info";


export default function FooterCTA() {
    return (
        <section className="section-wrapper mx-auto mt-20 flex flex-col justify-start items-center text-center gap-7 border rounded-4xl py-16 sm:py-20 bg-muted/10 relative z-0 backdrop-blur-2xl overflow-hidden">
            <div className="w-ful h-full inset-0 absolute -z-10 shadow-2xl blur-2xl bg-gradient-to-t from-primary/20 to-black" />
            <h2 className="text-balance font-bold text-3xl sm:text-5xl">
                Ready to Launch Your MVP?
            </h2>
            <p className=" text-base text-balance break-after-column text-foreground/90 max-w-xl">
                Book a free 30-minute consultation. We&apos;ll discuss your idea, map out the MVP scope, and give you a clear timeline and price. No pressure, no commitment.
            </p>
            <Button variant="default" decoration="ring" size={"lg"} className="mt-3" asChild>
                <a href={MEETING_LINK} target="_blank">
                   Book Free Consultation
                </a>
            </Button>
            <p className="text-sm text-muted-foreground">Or email us: <a href={"mailto:" + DEVREDBOX_CONTACT_EMAIL}>{DEVREDBOX_CONTACT_EMAIL}</a></p>
        </section>
    )
}