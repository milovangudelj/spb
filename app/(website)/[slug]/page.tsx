import { Metadata, ResolvingMetadata } from "next";
import { Module } from "~/components/modules";
import { getPageBySlug, getPageSlugs } from "~/sanity/lib/client";
import { urlForImage } from "~/sanity/lib/image";

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPage = async (slug: string) => {
  return await getPageBySlug(slug);
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const slugs = await getPageSlugs();

  return slugs.map((slug) => ({ slug }));
};

export async function generateMetadata(
  { params, searchParams }: PageProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const page = await getPage(params.slug);

  const previousImages = (await parent)?.openGraph?.images || [];
  const previousMetaBase =
    (await parent)?.metadataBase ||
    new URL(process.env.NEXT_PUBLIC_WEBSITE_URL!);

  return {
    metadataBase: previousMetaBase,
    title: page.seo.metaTitle,
    description: page.seo.metaDescription,
    openGraph: {
      images: [urlForImage(page.seo.shareGraphic).url(), ...previousImages],
    },
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const page = await getPage(slug);

  return (
    <>
      {page.modules.map((module) => (
        <Module key={module._key} data={module} />
      ))}
    </>
  );
}
