import {
  ImageAsset,
  ImageCrop,
  ImageHotspot,
  Reference,
  SanityDocument,
  Slug,
} from "sanity";

export type SimpleImage = {
  _type: "image";
  asset: Reference;
};

export type FullImage = SimpleImage & {
  crop: ImageCrop;
  hotspot: ImageHotspot;
  customRatio: number;
  alt: string;
};

export type ExpandedImage = FullImage & {
  asset: ImageAsset;
};

export type _HeroModule = {
  _type: "hero";
  title: string;
  content: string;
  withButton: boolean;
  buttonText: string | null;
  photo: ExpandedImage;
};

export type _MarqueeModule = {
  _type: "marquee";
  images: ExpandedImage[];
};

export type SEOMetadata = {
  _type: "seo";
  metaTitle: string;
  metaDescription: string;
  shareTitle: string;
  shareDescription: string;
  shareGraphic: SimpleImage;
};

export type Page = SanityDocument & {
  _type: "page";
  title: string;
  slug: Slug;
  modules: ({
    _key: string;
  } & (_HeroModule | _MarqueeModule))[];
  seo: SEOMetadata;
};

export type HomePage = SanityDocument & {
  _type: "page";
  title: string;
  modules: ({
    _key: string;
  } & (_HeroModule | _MarqueeModule))[];
  seo: SEOMetadata;
};

export type ErrorPage = SanityDocument & {
  _type: "page";
  title: string;
  modules: ({
    _key: string;
  } & (_HeroModule | _MarqueeModule))[];
  seo: SEOMetadata;
};

export type PageLink = {
  _key: string;
  _type: "pageLink";
  label: string;
  slug: Slug;
  page: Reference;
};

export type ExternalLink = {
  _key: string;
  _type: "externalLink";
  label: string;
  url: string;
  newTab: boolean;
};

export type Link = PageLink | ExternalLink;

export type SiteNavigation = SanityDocument & {
  _type: "siteNavigation";
  links: Link[];
};

export type SiteSettings = SanityDocument & {
  _type: "siteSettings";
  title: string;
  description: string;
  // keywords: string[];
  // logo: SimpleImage;
};
