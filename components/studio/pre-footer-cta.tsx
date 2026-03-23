import { Button } from "@/components/ui/button";

export default function PreFooterCta() {
    return (
        <section className="space-y-8 w-11/12 mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-muted-foreground text-center">
                <span className="text-foreground underline underline-offset-2">
                    Nothing More,
                </span>{" "}
                to Convince.
            </h2>
            <p className="text-center max-w-lg mx-auto sm:text-lg">Hop on a call or contact us to know more about how we work and how we can help you.</p>
            <div className="flex justify-center items-center">

                <Button variant={"inverted"} size={"xl"}>
                    Book a Call
                </Button>
            </div>

        </section>
    );
}