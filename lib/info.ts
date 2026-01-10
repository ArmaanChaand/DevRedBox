// Local env extracts
export const GAID = process.env.GAID || ""
export const MEETING_LINK = process.env.NEXT_PUBLIC_MEETING_LINK || ""

export const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://www.devredbox.in"
export const LIBRARY_ORIGIN = process.env.SITE_ORIGIN || "https://library.devredbox.in"
export const ALLUITOOLS_ORIGIN = process.env.SITE_ORIGIN || "https://alluitools.devredbox.in"
export const DEVREDBOX_CONTACT_EMAIL = process.env.DEVREDBOX_CONTACT_EMAIL || "contact@devredbox.in"
export const DEVREDBOX_LINKEDIN = process.env.DEVREDBOX_LINKEDIN || "https://www.linkedin.com/company/devredbox/"
export const DEVREDBOX_TWITTER = process.env.DEVREDBOX_TWITTER || "https://x.com/devredbox"
export const DEVREDBOX_IG = process.env.DEVREDBOX_IG || "https://www.instagram.com/devredbox.india/"
export const DEVREDBOX_YT = process.env.DEVREDBOX_YT || "https://www.youtube.com/@DevRedBox"
export const DEVREDBOX_GITHUB = process.env.DEVREDBOX_GITHUB || "https://github.com/ArmaanChaand/devredbox"

// Images
export const DEVREDBOX_LOGO_URL = process.env.DEVREDBOX_LOGO_URL || "https://www.devredbox.in/devredbox.webp"
export const DEVREDBOX_BANNER = process.env.DEVREDBOX_BANNER || "https://www.devredbox.in/devredbox-banner.webp"


// Metadata Informations
export const AUTHOR_DEVREDBOX = process.env.DEVREDBOX_LINKEDIN || SITE_ORIGIN
export const DEVREDBOX_META_IMAGE = {
    url: DEVREDBOX_LOGO_URL,
    alt: "DevRedBox",
    width: 8640,
    height: 8640
}


// Json Ld Schema Informations
export const JSON_LD_ORG_ID = SITE_ORIGIN + "/#organization"
export const JSON_LD_MAIN_WEB_ID = SITE_ORIGIN + "/#website"

// Only on the app/layout.
export const JSON_LD_ORGANIZATION = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": JSON_LD_ORG_ID,
    "name": "DevRedBox",
    "url": SITE_ORIGIN,
    "logo": {
        "@type": "ImageObject",
        "url": DEVREDBOX_LOGO_URL
    },
    "sameAs": [
        DEVREDBOX_LINKEDIN,
        DEVREDBOX_TWITTER,
        DEVREDBOX_IG,
        DEVREDBOX_YT,
        DEVREDBOX_GITHUB
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": DEVREDBOX_CONTACT_EMAIL,
        "availableLanguage": ["English"]
    }
}