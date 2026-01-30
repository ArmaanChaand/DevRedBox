import * as React from "react"
import { cn } from "@/lib/utils"

type TypographyBlockquoteProps = React.ComponentProps<"blockquote">

export function TypographyBlockquote({
    className,
    children,
    ...props
}: TypographyBlockquoteProps) {
    return (
        <blockquote
            className={cn(
                "border-l-2 pl-6 italic",
                className
            )}
            {...props}
        >
            {children}
        </blockquote>
    )
}
