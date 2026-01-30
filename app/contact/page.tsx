import { Metadata } from "next";
import Link from "next/link";
import { MEETING_LINK } from "@/lib/info";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Phone } from "lucide-react";
import generateStaticMetadata from "@/lib/static-metadata";
import { IconGitHub, IconInstagram, IconLinkedIn, IconTwitter, IconYouTube } from "@/components/ui/icons";


export const metadata: Metadata = generateStaticMetadata({
    title: "Contact DevRedBox – Get in Touch with Our Web Development Team",
    description: "Contact DevRedBox to discuss your website or app project. Our team is here to help you with modern, scalable, and high-performance web solutions",
    pagePath: "/contact",
    keywords: ["Contact DevRedBox", "DevRedBox web design and development studio"],
})

export default function Home() {
    return (
        <>
            <section className="h-fit mt-20 section-wrapper mx-auto mb-10">
                <h1 className="text-6xl sm:text-8xl font-black">Contact Us</h1>
                <p className="text-sm sm:text-base pl-2 mt-2 text-muted-foreground lg:w-10/12">
                    You can easily book
                    {"  "}
                    <a href={MEETING_LINK} target="_blank" className="underline">an online appointment</a>
                    {" "}
                    with our team using the buttons available on the
                    {" "}
                    <Link href="/" className="underline">homepage.</Link>
                    {" "}
                    If you’d prefer, you can also reach out to us directly — whether you’d like more information, want to discuss a project idea, or simply wish to leave a message. Use the contact links provided below to get in touch, and we’ll get back to you as soon as possible.</p>
            </section>
            <section className="section-wrapper mx-auto mb-20">
                <div className="w-full grid sm:grid-cols-2 gap-5">
                    <div className="bg-secondary p-5 rounded">
                        <h2 className="text-sm mb-3">Our Socials</h2>
                        <div className="flex justify-start items-center gap-4 bg-accent/20 w-fit rounded relative">
                            <a href="https://www.linkedin.com/company/devredbox/" target="_blank" className="" title="DevRedBox LinkedIn Page">
                                <IconLinkedIn className="size-5" />
                            </a>
                            <Separator orientation="vertical" className="!h-3" />
                            <a href="https://www.x.com/devredbox" target="_blank" className="" title="DevRedBox Twitter Page">
                                <IconTwitter className="size-5" />
                            </a>
                            <Separator orientation="vertical" className="!h-3" />
                            <a href="https://www.instagram.com/devredbox.studio" target="_blank" className="" title="DevRedBox at Instagram">
                                <IconInstagram className="size-5" />
                            </a>

                        </div>
                    </div>
                    <div className="bg-foreground text-background p-5 rounded block relative overflow-hidden">
                        <div className="text-sm">
                            <h2>Email us at</h2>
                            <a href="mailto:contact@devredbox.in" className="text-xl">
                                contact@devredbox.in
                            </a>
                        </div>
                        <span className="absolute size-8 right-10 -top-7 text-8xl font-black text-muted/30" >
                            @
                        </span>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                    <a href="https://www.youtube.com/@DevRedBox" target="_blank" className="p-5 rounded relative border">
                        <ArrowUpRight className="absolute top-2 right-2 text-muted-foreground" />
                        <IconYouTube className="size-8 text-primary" />
                        <span>DevRedBox on YouTube</span>
                    </a>
                    <div className="p-5 rounded border">
                        <h2 className="mb-3 text-sm">Additional Links</h2>

                        <div className="flex justify-start items-center gap-4 w-fit rounded relative">
                            <a href="https://github.com/ArmaanChaand/devredbox" target="_blank" className="" title="Explore on GitHub">
                                <IconGitHub className="size-5" />
                            </a>
                            <Separator orientation="vertical" className="!h-3" />
                            <a href={MEETING_LINK} target="_blank" className="" title="Book an appointment">
                                <Phone className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
