import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import generateStaticMetadata from "@/lib/static-metadata";
import { IconLinkedIn, IconTwitter, IconYouTube } from "@/components/ui/icons";
import ContactForm from "@/components/studio/contact-form";


export const metadata: Metadata = generateStaticMetadata({
    title: "Contact DevRedBox – Get in Touch with Our Web Development Team",
    description: "Contact DevRedBox to discuss your website or app project. Our team is here to help you with modern, scalable, and high-performance web solutions",
    pagePath: "/contact",
    keywords: ["Contact DevRedBox", "DevRedBox web design and development studio"],
})

export default function Home() {
    return (
        <div className="section-wrapper flex flex-col md:flex-row mt-20 md:mt-28 mb-20 gap-10">
            <section className="flex-1 space-y-5">
                <h1 className="text-4xl font-black">Contact Us</h1>
                <p className="text-muted-foreground">
                    Email us, call to book an appointment, find us on social media, or complete the form <span className="hidden md:inline-block">on the right</span> <span className="md:hidden">below</span> to get in touch.
                </p>
                <p className="">
                    Email:
                    <br />
                    contact@devredbox.in
                </p>
                <div className="space-y-3 ">
                    <p className="text-base ">Our Socials:</p>
                    <div className="flex justify-start items-center gap-4 w-fit rounded relative">
                        <a href="https://www.youtube.com/@DevRedBox" target="_blank" className="" title="DevRedBox YouTube Channel">
                            <IconYouTube className="size-5" />
                        </a>
                        <Separator orientation="vertical" className="!h-5" />
                        <a href="https://www.linkedin.com/company/devredbox/" target="_blank" className="" title="DevRedBox LinkedIn Page">
                            <IconLinkedIn className="size-5" />
                        </a>
                        <Separator orientation="vertical" className="!h-5" />
                        <a href="https://x.com/devredbox" target="_blank" className="" title="Find on X">
                            <IconTwitter className="size-4" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="shrink-0 md:w-xs lg:w-md">
                <ContactForm />
            </section>
        </div>
    );
}
