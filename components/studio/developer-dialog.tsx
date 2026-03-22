"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconLinkedIn, IconTwitter } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { MEETING_LINK } from "@/lib/info";


export default function DeveloperDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"default"} className="h-fit w-full max-w-xs font-semibold mx-auto">
                    <Image
                        src="/armaan-chaand.webp"
                        alt="Armaan Chaand"
                        className="object-cover w-10 h-10 rounded-full shrink-0"
                        width={64}
                        height={64}
                    />
                    Talk with Armaan
                </Button>
            </DialogTrigger>
            <DialogContent className="grid sm:grid-cols-2">
                <div className="col-span-1 aspect-square">
                    <Image
                        src="/armaan-chaand.webp"
                        alt="Armaan Chaand"
                        className="object-cover w-full h-full rounded shrink-0"
                        width={512}
                        height={512}
                    />
                </div>
                <div>
                    <DialogHeader>
                        <DialogTitle>Armaan Chaand</DialogTitle>
                        <DialogDescription>
                            Talk directly with the developer plus project in charge. You can book a call or contact via social media.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-5 space-y-2">
                        <Button variant={"inverted"} className="w-full" asChild>
                            <a href={MEETING_LINK} target="_blank">
                                Book a Call
                            </a>

                        </Button>

                        <div className="flex justify-center items-center gap-4 bg-background/10 px-4 py-3 w-full rounded relative">
                            <a href="https://www.linkedin.com/in/armaanchaand/" target="_blank" className="" title="DevRedBox LinkedIn Page">
                                <IconLinkedIn className="size-5" />
                            </a>
                            <Separator orientation="vertical" className="!h-5" />
                            <a href="https://x.com/devredbox" target="_blank" className="" title="Find on X">
                                <IconTwitter className="size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}