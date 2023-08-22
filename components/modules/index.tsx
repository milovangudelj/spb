import { HeroModule } from "./Hero";
import { MarqueeModule } from "./Marquee";

import { Page } from "~/sanity/lib/types";

export const Module = ({ data }: { data: Page["modules"][0] }) => {
  switch (data._type) {
    case "hero":
      return <HeroModule {...data} />;
      break;
    case "marquee":
      return <MarqueeModule {...data} />;
      break;

    default:
      return <></>;
      break;
  }
};
