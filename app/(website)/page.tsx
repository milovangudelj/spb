import { Module } from "~/components/modules";
import { getHomePage } from "~/sanity/lib/client";

export default async function HomePage() {
  const page = await getHomePage();

  return (
    <>
      {page.modules.map((module) => (
        <Module key={module._key} data={module} />
      ))}
    </>
  );
}
