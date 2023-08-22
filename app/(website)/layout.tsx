import type { Metadata } from "next";
import { Footer, Navbar } from "~/components";
import { getSiteNavigation, getSiteSettings } from "~/sanity/lib/client";

import "~/styles/globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL!),
    title: settings.title,
    description: settings.description,
  };
}

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteNavigation = await getSiteNavigation();

  return (
    <>
      <Navbar links={siteNavigation.links} />
      {children}
      <Footer links={siteNavigation.links} />
    </>
  );
}
