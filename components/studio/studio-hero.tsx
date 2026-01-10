"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react"
import TerminalIllust from "@/components/ui/hero-illutrations";


export default function HeroStudio({ meetingLink }: { meetingLink: string }) {

    return (
        <section className="synced-width mx-auto flex justify-between items-center relative overflow-hidden pl-2">
            <div className="flex flex-col justify-center items-start mt-32  mb-20 sm:mb-28 gap-8">
                <motion.p
                    className="text-xs flex justify-center gap-2 items-center p-2 border rounded-md bg-secondary/20"
                    initial={{
                        opacity: 0,
                        translateX: 5
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{
                        delay: 0.6
                    }}
                    viewport={{ once: true }}
                >
                    For Non-Tech Founders
                </motion.p>
                <motion.h1
                    className="text-4xl xl:text-6xl font-bold font-mono max-w-3xl"
                    initial={{
                        // translateY: 20,
                        opacity: 0
                    }}
                    animate={{
                        // translateY: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                >
                    Have a SaaS idea but don’t want to build it yourself?
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl w-full max-w-2xl text-start  leading-relaxed text-muted-foreground [&_span]:text-foreground"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.3
                    }}
                    viewport={{ once: true }}
                >
                    DevRedBox helps founders build and launch SaaS MVPs without wasting time and money.
                    No agency layers. No handoffs. You work directly with the developer building your product — from idea to launch.
                </motion.p>

                <motion.div
                    className="w-full sm:w-fit grid sm:grid-cols-2 gap-5 mt-4"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.4
                    }}
                    viewport={{ once: true }}
                >
                    <Button className="w-56 sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="primary" decoration={"ring"} asChild>
                        <a href={meetingLink} target="_blank">
                            Book a Discovery Call
                        </a>
                    </Button>
                    <Button className="w-fit sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="link" asChild>
                        <Link href="#how-it-works">
                            Visit LinkedIn
                        </Link>
                    </Button>
                </motion.div>
            </div>
            <motion.div
                className="hidden md:block mt-auto mb-20"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.7
                }}
                transition={{
                    delay: 0.7
                }}
                viewport={{ once: true }}
            >
                <TerminalIllust />
            </motion.div>
        </section>
    )
}