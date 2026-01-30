import { Badge } from "../ui/badge";
import ScrollHijackedDiv from "./scroll-hijacked-div";
import WorkProcess from "./work-process-section";
import { ArrowRightCircle, CheckCircle2, RocketIcon, TargetIcon, Zap } from "lucide-react";
import { ListItem } from "../ui/lists";

export default function HowWeWork() {


    return (
        <div className="section-wrapper mx-auto md:h-[500vh] relative mt-20" id="how-it-works">
            <section
                className="mx-auto flex flex-col md:flex-row justify-between items-center bg-accent/30 px-0 md:px-7 py-7 rounded-xl gap-10 -top-24 sm:top-24 static md:sticky z-10"
            >
                <div className=" flex flex-col justify-start items-center md:items-start text-center md:text-start gap-6 ">
                    <Badge variant="link" className="text-sm" asChild><p>How it Works</p></Badge>

                    <h2 className="text-balance font-bold text-3xl sm:text-5xl">
                        From Idea to Launch in 3 Steps
                    </h2>

                    <p className="text-lg md:text-xl text-balance w-full max-w-xl text-foreground/90">
                        No surprises. No scope creep. Just a clear path from concept to live product.
                    </p>
                </div>
                <div className="w-full md:h-96 p-5 md:overflow-hidden">
                    <ScrollHijackedDiv className="flex flex-col gap-5 w-full">

                        <WorkProcess
                            icon={<TargetIcon className="size-5" />}
                            heading="Discovery & Scoping (Week 1)"
                            title="We Figure Out What to Build"
                            description={
                                <>
                                    <p>
                                        Most MVPs fail because founders build too much, too slowly.
                                    </p>
                                    <span className="block mt-4 mb-2">
                                        In our discovery call, we:
                                    </span>
                                    <ul className="list-disc list-inside divide-y">
                                        <ListItem point={<CheckCircle2 />}>
                                            Understand your target user and their problem
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            Identify your riskiest assumption to test
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            Decide which 3-5 features make the cut for v1
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            Map out a realistic timeline and budget
                                        </ListItem>
                                    </ul>
                                    <p className="block mt-3">
                                        You leave with clarity on what you&apos;re actually building and why.
                                    </p>
                                </>
                            }
                        />
                        <WorkProcess
                            icon={<Zap className="size-5" />}
                            heading="Development (Weeks 2-10)"
                            title="We Build Your MVP in Next.js"
                            description={
                                <>
                                    <p>
                                        While you focus on customer research and go-to-market prep, we build.
                                    </p>
                                    <span className="block mt-4 mb-2">
                                        What you get:
                                    </span>
                                    <ul className="list-disc list-inside divide-y">
                                        <ListItem point={<CheckCircle2 />} >
                                            Clean, modern interface users will actually enjoy
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            Core features that work (authentication, payments, data handling)
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            Weekly check-ins so you see progress in real-time
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            No technical jargon—just clear updates on what&apos;s done and what&apos;s next
                                        </ListItem>
                                    </ul>
                                    <p className="block mt-3">
                                        Tech stack: Next.js, React, Tailwind CSS, deployed on Vercel.
                                    </p>
                                </>
                            }
                        />
                        <WorkProcess
                            icon={<RocketIcon className="size-5" />}
                            heading="Launch & Handoff (Weeks 11-12)"
                            title="Once built, we don't disappear."
                            description={
                                <>
                                    <span className="block mt-4 mb-2">
                                        We help you:
                                    </span>
                                    <ul className="list-disc list-inside divide-y">
                                        <ListItem point={<CheckCircle2 />}>
                                            Deploy to production (live on your domain)
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            Test with real users to catch any issues
                                        </ListItem>
                                        <ListItem point={<CheckCircle2 />}>
                                            Understand the codebase (full documentation included)
                                        </ListItem>
                                    </ul>
                                    <span className="block mt-4 mb-2">
                                        After launch, you can:
                                    </span>
                                    <ul className="list-disc list-inside divide-y">
                                        <ListItem point={<ArrowRightCircle />} >
                                            Hire in-house and hand over the code, OR
                                        </ListItem>
                                        <ListItem point={<ArrowRightCircle />}>
                                            Keep working with us for updates and new features
                                        </ListItem>
                                    </ul>
                                    <p className="block mt-3">
                                        Your choice. No lock-in.
                                    </p>
                                </>
                            }
                        />

                    </ScrollHijackedDiv>
                </div>
            </section>
        </div>
    )
}