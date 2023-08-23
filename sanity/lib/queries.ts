import { groq } from "next-sanity";

const imageData = groq`
    ...,
    "asset": asset->,
`;

const heroModuleData = groq`
    ...,
    'photo': photo{
      ${imageData}
    },
`;

const marqueeModuleData = groq`
    ...,
    'images': images[]{
      ${imageData}
    },
`;

const modulesData = groq`
  'modules': modules[]{
    _type == 'reference' => @->content[0]{
      _type == 'hero' => {
        ${heroModuleData}
      },
      _type == 'marquee' => {
        ${marqueeModuleData}
      },
    },
    _type != 'reference' => @{
      _type == 'hero' => {
        ${heroModuleData}
      },
      _type == 'marquee' => {
        ${marqueeModuleData}
      },
    },
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    ...,
    ${modulesData},
  }
`;

export const pageSlugsQuery = groq`
  *[_type == "page"].slug.current
`;

export const homePageQuery = groq`
  *[_type == "homePage" && _id == "homePage"][0]{
    ...,
    ${modulesData},
  }
`;

export const errorPageQuery = groq`
  *[_type == "errorPage" && _id == "errorPage"][0]{
    ...,
    ${modulesData},
  }
`;

export const siteNavigationQuery = groq`
  *[_id == "siteNavigation"][0]{
    ...,
    "links": links[]{
      _type == "pageLink" => @{
        ...,
        "slug": page->slug,
        linkToModule == true => { moduleId },
        linkToModule != true => { "moduleId": null },
      },
      _type == "externalLink" => @
    }
  }
`;

export const siteSettingsQuery = groq`
  *[_id == "siteSettings"][0]
`;
