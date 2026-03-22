import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <div className="h-screen flex justify-center items-center flex-col text-center space-y-3">
            <h1 className="text-2xl font-semibold">You Are Lost!</h1>
            <p className="max-w-lg">
                The link may be broken, or the page may have been removed. Whatever you were looking for, it&apos;s not here anymore.
            </p>
            <div className="flex justify-center items-center gap-5 mt-5">
                <Button asChild variant={"inverted"}>
                    <Link href="/">
                        Visit Home
                    </Link>

                </Button>

            </div>


        </div>
    );
}