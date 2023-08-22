import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "~/sanity/env";
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
  apiVersion,
  dataset,
  projectId,
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
