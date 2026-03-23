import { DEVREDBOX_LOGO_URL, SITE_ORIGIN } from '@/lib/info'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Studio
        {
            url: SITE_ORIGIN,
            images: [DEVREDBOX_LOGO_URL]
        },
        {
            url: SITE_ORIGIN + "/contact",
        },
        {
            url: SITE_ORIGIN + "/about",
        },
    ]
}