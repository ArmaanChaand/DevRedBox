"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function LinkedinBadge() {
    useEffect(() => {
        // Re-initialize LinkedIn badges if script already loaded
        if (typeof window !== "undefined" && (window as any).IN) {
            (window as any).IN.parse();
        }
    }, []);

    return (
        <>
            <div
                className="w-fit!"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="armaanchaand"
                data-version="v1"
            />

            <Script
                src="https://platform.linkedin.com/badges/js/profile.js"
                strategy="afterInteractive"
            />
        </>
    );
}
