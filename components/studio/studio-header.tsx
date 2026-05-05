"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Equal, X } from "lucide-react";
import { DevRedBoxLogoRaw } from "@/components/ui/devredbox-logo";
import { MEETING_LINK } from "@/lib/info";

const mbNavItems = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Library",
    link: "/library",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "LinkedIn",
    link: "http://linkedin.com/in/armaanchaand/",
  },
];
export default function StudioHeader() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(prev => prev ? false : prev)

  }, [pathname])

  return (
    <header
      className="fixed top-0 z-50 bg-background w-full"
    >
      <div className="section-wrapper mx-auto flex justify-between items-center">
        <nav className="w-full max-w-xl lg:max-w-3xl flex justify-between items-center mx-auto py-5 relative [&_a]:hover:underline">
          <ul className="flex-1 text-sm lg:text-base flex justify-center md:justify-between items-center">
            <li className="hidden md:block">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hidden md:block">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="hidden md:block">
              <Link href={"/library"} className="">
                Library
              </Link>
            </li>

            <li className="mr-auto md:mr-0">
              <Link href="/">
                <DevRedBoxLogoRaw className="text-primary" />
                <span className="sr-only">DevRedBox</span>
              </Link>
            </li>

            <li className="hidden md:block">
              <a href="http://linkedin.com/in/armaanchaand/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li className="hidden md:block">
              <a href="https://x.com/devredbox" target="_blank">
                Twitter
              </a>
            </li>
            <li className="hidden md:block">
              <a href={MEETING_LINK} target="_blank">
                Call
              </a>
            </li>
          </ul>
        </nav>
         <Button
          onClick={() => setOpen((v) => !v)}
          variant={"outline"}
          className="md:hidden shadow-none mr-3"
        >
          {open ? <X className="size-5" /> : <Equal className="size-5" />}
        </Button>
      </div>
      <motion.div
        className="h-0 w-full bg-background md:hidden overflow-hidden px-5"
        transition={{
          ease: [0.34, 1.56, 0.64, 1]
        }}
        style={{
          height: open ? 'calc(100vh - 4rem)' : '0'
        }}
        layout
      >
        <nav className="w-full my-3">
          <ul className="flex flex-col justify-start items-start gap-3 divide-y">
            {
              mbNavItems.map((item, idx) => (
                <li key={`mb-link-${idx}`} className="w-full pb-3">
                  <Link href={item.link} className="text-base text-muted-foreground hover:text-foreground transition-all duration-300">
                    {item.name}
                  </Link>
                </li>))
            }
          </ul>
        </nav>
        <Button
          type="button"
          variant={"primary"}
          size={"xl"}
          className="w-full"
          asChild
        >
          <a href={MEETING_LINK} target="_blank" title="Visit DevRedBox Studio">
            Book a Call

          </a>
        </Button>
      </motion.div>
    </header>
  );
}
