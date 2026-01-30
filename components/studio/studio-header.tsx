"use client";
import Link from "next/link";
import { DevRedBoxLogoRaw } from "../ui/devredbox-logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MEETING_LINK } from "@/lib/info";

export default function StudioHeader() {
    const [open, setOpen] = useState(false)

    return (
        <header
            className="fixed top-0 z-50 bg-background w-full"
            style={{
                height: open ? "100vh" : "fit-content"
            }}
        >
            <p className="w-full text-base py-1 bg-foreground text-background text-center">Website is under development!</p>
            <div className="section-wrapper mx-auto flex justify-between items-center">
                <Button onClick={() => setOpen(v => !v)} variant={"outline"} className="md:hidden shadow-none">
                    {open ? <X /> : <Menu />}
                    {open ? "Close" : "Menu"}
                </Button>
                <nav
                    className="w-full max-w-xl lg:max-w-3xl flex justify-between items-center mx-auto py-5 relative [&_a]:hover:underline"
                >
                    <ul className="flex-1 text-sm lg:text-base flex justify-center md:justify-between items-center">
                        <li className="hidden md:block">
                            <Link href={"/about"}>
                                About
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link href={"/projects"}>
                                Projects
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link href={"/library"} className="">
                                Library
                            </Link>
                        </li>

                        <li>
                            <Link href="/" >
                                <DevRedBoxLogoRaw className="text-primary" />
                                <span className="sr-only">DevRedBox</span>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link href={"/contact"}>
                                Contact
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <a href="http://linkedin.com/in/armaanchaand/" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li className="hidden md:block">
                            <a href={MEETING_LINK} target="_blank">
                                Call
                            </a>
                        </li>
                    </ul>
                </nav>
                <Button variant={"inverted"} className="md:hidden" asChild>
                    <a href={MEETING_LINK} target="_blank">
                        Book a Call
                    </a>
                </Button>
            </div>
            <nav style={{ display: open ? "block" : "none" }} className="section-wrapper mx-auto">
                <ul className="flex text-xl flex-col justify-start items-start mt-8 gap-5">
                    <li className="">
                        <Link href={"/about"}>
                            About
                        </Link>
                    </li>
                    <li className="">
                        <Link href={"/projects"}>
                            Projects
                        </Link>
                    </li>
                    <li className="">
                        <Link href={"/library"} className="">
                            Library
                        </Link>
                    </li>
                    <li className="">
                        <Link href={"/about"}>
                            Contact
                        </Link>
                    </li>
                    <li className="">
                        <Link href={"/projects"}>
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
}