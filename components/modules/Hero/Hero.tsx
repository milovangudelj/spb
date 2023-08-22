import Image from "next/image";
import { urlForImage } from "~/sanity/lib/image";
import { type _HeroModule } from "~/sanity/lib/types";

export const HeroModule = ({
  title,
  content,
  withButton,
  buttonText,
  photo,
}: _HeroModule) => {
  return (
    <div className="relative overflow-hidden px-8">
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={urlForImage(photo).quality(100).url()}
        placeholder="blur"
        blurDataURL={photo.asset.metadata.lqip}
        width={photo.asset.metadata.dimensions.width}
        height={photo.asset.metadata.dimensions.height}
        quality={100}
        alt={photo.alt}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 py-32">
        <h1 className="max-w-[680px] text-d1-mobile text-white md:text-d1">
          {title}
        </h1>
        <p>{content}</p>
        {withButton && (
          <button className="w-fit rounded-lg bg-orange-500 px-4 py-2 text-button text-white">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};
