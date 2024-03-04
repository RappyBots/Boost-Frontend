const selfURL = "https://boostbot.eu";

const pages = [
    {
        loc: "/",
        lastmod: "2024-02-23",
        changefreq: "daily",
        priority: 1
    },
    {
        loc: "/invite",
        lastmod: "2024-02-23",
        changefreq: "monthly",
        priority: 0.9
    },
    {
        loc: "/vote",
        lastmod: "2024-02-23",
        changefreq: "monthly",
        priority: 0.8
    },
    {
        loc: "/review",
        lastmod: "2024-02-23",
        changefreq: "monthly",
        priority: 0.8
    },
    {
        loc: "/support",
        lastmod: "2024-02-23",
        changefreq: "monthly",
        priority: 0.7
    },
    {
        loc: "/feedback",
        lastmod: "2024-02-23",
        changefreq: "monthly",
        priority: 0.7
    },
    {
        loc: "/status",
        lastmod: "2024-02-23",
        changefreq: "monthly",
        priority: 0.6
    },
    {
        loc: "/docs/privacy",
        lastmod: "2024-02-23",
        changefreq: "weekly",
        priority: 0.4
    },
    {
        loc: "/docs/terms",
        lastmod: "2024-02-23",
        changefreq: "weekly",
        priority: 0.4
    },
]

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
        ${pages
            .map(
              (page) => `
                    <url>
                        <loc>${selfURL}${page.loc}</loc>
                        <changefreq>${page.changefreq}</changefreq>
                        <priority>${page.priority}</priority>
                        <lastmod>${page.lastmod}</lastmod>
                    </url>
                `,
            ).join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}