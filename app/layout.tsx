import { getSiteSettings } from "@/sanity/queries/siteSettings";
import "./globals.css";
import "./scroll-bar.css";
import { Inter } from "next/font/google";
import { SiteSettingsType } from "./(components)/types";
import Nav from "./(components)/nav";
import SocialIcons from "./(components)/SocialIcons";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const siteSettings = (await getSiteSettings()) as SiteSettingsType;

  return {
    title: siteSettings.siteTitle,
    description: siteSettings.siteDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      images: siteSettings.ogImage.url,
    },
    favicon: siteSettings.ogImage.url,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = (await getSiteSettings()) as SiteSettingsType;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={siteSettings.ogImage.url} />
      </head>
      <body className={inter.className}>
        <Nav siteSettings={siteSettings} />
        {children}
        <SocialIcons socialIcons={siteSettings.socialLinks} />
      </body>
    </html>
  );
}
