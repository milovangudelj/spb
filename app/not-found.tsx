import { Footer, Navbar } from "~/components";
import { Module } from "~/components/modules";
import { getErrorPage, getSiteNavigation } from "~/sanity/lib/client";

import "~/styles/globals.css";

export default async function NotFound() {
  const siteNavigation = await getSiteNavigation();
  const page = await getErrorPage();

  return (
    <>
      <Navbar links={siteNavigation.links} />
      {page.modules.map((module) => (
        <Module key={module._key} data={module} />
      ))}
      <Footer links={siteNavigation.links} />
    </>
  );
}
