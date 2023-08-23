import Image from "next/image";
import { ComponentProps } from "react";
import { urlForImage } from "~/sanity/lib/image";
import { ExpandedImage, _MarqueeModule } from "~/sanity/lib/types";

export const MarqueeModule = ({ moduleId, images }: _MarqueeModule) => {
  return (
    <div className="mt-8 flex select-none overflow-hidden" id={moduleId}>
      <MarqueeImages images={images} />
      <MarqueeImages images={images} aria-hidden="true" />
    </div>
  );
};

const MarqueeImages = ({
  images,
  ...props
}: { images: ExpandedImage[] } & ComponentProps<"ul">) => {
  return (
    <ul
      className="animate-slide flex min-w-full flex-shrink-0 items-center gap-16 pr-16 will-change-transform"
      {...props}
    >
      {images.map((image) => (
        <li
          key={image.asset._id}
          className="opacity-60 transition hover:opacity-100"
        >
          <Image
            src={urlForImage(image).url()}
            alt={image.alt}
            placeholder={
              image.asset.mimeType !== "image/svg+xml" ? "blur" : "empty"
            }
            blurDataURL={image.asset.metadata.lqip}
            width={image.asset.metadata.dimensions.width}
            height={image.asset.metadata.dimensions.height}
            priority
            className="pointer-events-none select-none object-cover"
          />
        </li>
      ))}
    </ul>
  );
};
