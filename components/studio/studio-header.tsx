"use client";
import NextLink from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { MEETING_LINK } from "@/lib/info";
import { DevRedBoxLogo } from "../ui/devredbox-logo";
import { Button } from "../ui/button";

const Link = motion.create(NextLink)

export default function StudioHeader() {
    const [open, setOpen] = useState(false)

    return (
        <motion.header
            className="w-screen fixed top-0 z-50 bg-background overflow-hidden h-24"
            initial={false}
            animate={{
                height: open ? "100vh" : "5rem",
                // background: open ? "var(--secondary)" : "var(--background)"
            }}
            transition={{ ease: "easeInOut" }}
        >
            <motion.div
                className="flex items-center synced-width mx-auto py-5 relative opacity-0"
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.5
                    }
                }}

            >
                <Link href="/" >
                    <DevRedBoxLogo />
                </Link>
                <nav className="ml-auto hidden md:flex justify-center items-center gap-5 ">
                    <Link className="main-nav-item" href="/#pricing">Pricing</Link>
                    <Link className="main-nav-item" href="/contact">Contact</Link>
                    <Link className="main-nav-item" href="/#faq">FAQs</Link>
                    <Button variant={'outline'} className="bg-background! ml-2 border-2 hover:bg-secondary!" size={'lg'} asChild>
                        <a
                            href={MEETING_LINK}
                            target="_blank"
                            title="Book a Call"
                            rel="noopener noreferrer"
                            aria-label="Book a Call with Armaan Chaand"
                        >
                            Book a Call
                        </a>
                    </Button>
                </nav>
                <Button onClick={() => setOpen(v => !v)} variant="ghost" size="icon" className="ml-auto md:hidden relative z-0" >
                    {open ?
                        <X className="size-5" />
                        :
                        <Menu className="size-5 text-background" />
                    }
                </Button>
                <motion.div className="absolute bg-secondary -z-10 inset-0 md:hidden rounded"
                    animate={{
                        width: open ? "200vw" : 36,
                        height: open ? "100vh" : 36,
                        left: "unset",
                        right: open ? "-35px" : 0,
                        top: open ? 0 : 20,
                        background: open ? "var(--secondary)" : "var(--foreground)",
                        transition: {
                            default: {
                                duration: 0.3
                            },
                            background: {
                                duration: 0.2,
                                ease: "linear"
                            }
                        }
                    }}
                />
            </motion.div>
            <nav className="mt-10 flex flex-col justify-start items-start synced-width mx-auto gap-1">
                <motion.span
                    className="text-sm font-semibold text-muted-foreground"
                    initial={false}
                    animate={{
                        opacity: open ? 1 : 0,
                        translateY: open ? 0 : 20,
                        transition: {
                            delay: 0
                        }
                    }}
                >
                    Studio
                </motion.span>

                <Link
                    onClick={() => setOpen(false)} className="text-xl" href="/#pricing"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0
                        }
                    }}
                >
                    Pricing
                </Link>
                <Link
                    onClick={() => setOpen(false)} className="text-xl" href="/contact"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.1
                        }

                    }}
                >Contact</Link>
                <Link
                    onClick={() => setOpen(false)}
                    className="text-xl" href="/#faq"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.2
                        }
                    }}
                >FAQs</Link>

                <motion.span
                    className="text-sm font-semibold text-muted-foreground mt-5"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.7
                        }
                    }}
                >
                    External <ArrowUpRight className="size-4 inline mb-1" />
                </motion.span>
                <motion.div className="grid grid-cols-2 gap-2 w-full"
                    animate={{
                        opacity: open ? 1 : 0,
                        translateY: open ? 0 : 20,
                        transition: {
                            delay: 0.8
                        }
                    }}
                >
                    <Button
                        className="cols-span-1 rounded-sm"
                        asChild
                        hidden
                    >
                        <a
                            href="/library" target="_blank" title="DevRedBox Etsy Store"
                        >
                            <Image
                                src={"/etsy-icon.svg"}
                                alt="Etsy"
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                            Etsy Store
                        </a>
                    </Button>
                    <Button
                        className="cols-span-1 rounded-sm "
                        asChild
                    >
                        <a
                            href="https://www.youtube.com/@DevRedBox" target="_blank" title="DevRedBox YouTube Channel"
                        >
                            <Image
                                src={"/yt-icon.svg"}
                                alt="YouTube Channel"
                                width={20}
                                height={20}
                            />
                            YT Channel
                        </a>
                    </Button>
                    {/* Third External Link */}
                </motion.div>
            </nav>
        </motion.header >
    )
}