import { createClient } from "next-sanity";
import { env } from "~/env/client.mjs";

import { useCdn } from "~/sanity/env";
import {
  errorPageQuery,
  homePageQuery,
  pageBySlugQuery,
  pageSlugsQuery,
  siteNavigationQuery,
  siteSettingsQuery,
} from "~/sanity/lib/queries";
import {
  ErrorPage,
  HomePage,
  Page,
  SiteNavigation,
  SiteSettings,
} from "~/sanity/lib/types";

export const client = createClient({
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn,
});

export async function getPageSlugs(): Promise<string[]> {
  return (await client.fetch(pageSlugsQuery)) || [];
}

export async function getPageBySlug(slug: string): Promise<Page> {
  return await client.fetch(pageBySlugQuery, { slug });
}

export async function getHomePage(): Promise<HomePage> {
  return await client.fetch(homePageQuery);
}

export async function getErrorPage(): Promise<ErrorPage> {
  return await client.fetch(errorPageQuery);
}

export async function getSiteNavigation(): Promise<SiteNavigation> {
  return await client.fetch(siteNavigationQuery);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return await client.fetch(siteSettingsQuery);
}
