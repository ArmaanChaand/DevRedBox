import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Earth } from "lucide-react";
import Link from "next/link";
import { DevRedBoxLogoRaw } from "@/components/ui/devredbox-logo";
import { IconLinkedIn, IconTwitter, IconYouTube } from "@/components/ui/icons";

export default function FooterStudio() {
    return (
        <div className="bg-foreground text-background  pt-16 pb-10">

            <footer className="section-wrapper mx-auto relative">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2">
                    <div>
                        <Link href="/" className="text-xl font-black relative w-fit block text-background">
                            <DevRedBoxLogoRaw className="w-32"/>
                        </Link>
                        <div className="flex justify-start items-center gap-4 mt-8">
                            <span className="p-2 border border-dashed bg-background/10 mt-1 border-background/30">
                                <Earth />
                            </span>
                            <p className="text-xs text-background/80">
                                Started in India.
                                <br />
                                Empowering ideas worldwide.
                            </p>
                        </div>
                        <div className="mt-8">
                            <p className="flex justify-start items-center gap-2 text-sm mb-2 text-muted-foreground font-semibold">Our Socials <ArrowUpRight className="size-4" /> </p>
                            <div className="flex justify-start items-center gap-4 bg-background/10 px-4 py-3 w-fit rounded relative">
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
                    </div>
                    <div className="grid grid-cols-2 mt-10 sm:mt-0">
                        <nav className="flex flex-col justify-start items-start gap-3">
                            <span className="text-muted-foreground font-semibold text-sm mb-2 underline underline-offset-4">Studio</span>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                        <nav className="flex flex-col justify-start items-start gap-3">
                            <span className="text-muted-foreground font-semibold text-sm mb-2 underline underline-offset-4">Resources</span>
                            <a href="/library" target="_blank">Library</a>
                            <a href="/library/ui-kits" target="_blank">UI Kits</a>
                        </nav>
                    </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center text-sm text-muted-foreground">
                    <p> Copyright &copy; 2025 DevRedBox</p>
                    <p className="flex justify-between items-center gap-2" hidden>
                        <Link href="/" >
                            Privacy Policy
                        </Link>
                        &bull;
                        <Link href="/" >
                            Terms & Conditions
                        </Link>
                    </p>
                </div>
            </footer >
        </div>
    )
}