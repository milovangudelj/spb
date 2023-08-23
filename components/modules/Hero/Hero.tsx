import Image from "next/image";
import { urlForImage } from "~/sanity/lib/image";
import { type _HeroModule } from "~/sanity/lib/types";

export const HeroModule = ({
  moduleId,
  title,
  content,
  withButton,
  buttonText,
  photo,
}: _HeroModule) => {
  return (
    <div className="overflow-hidden px-8" id={moduleId}>
      <div className="mx-auto flex max-w-7xl justify-between py-32">
        <div className="flex flex-col gap-8">
          <h1 className="fv-width-150 text-h1-mobile text-white md:text-h1">
            {title}
          </h1>
          <p>{content}</p>
          {withButton && (
            <button className="w-fit rounded-lg bg-orange-500 px-4 py-2 text-button text-white">
              {buttonText}
            </button>
          )}
        </div>
        <Image
          className="block h-[300px] w-[400px] object-cover object-center"
          src={urlForImage(photo).width(400).height(300).quality(100).url()}
          placeholder="blur"
          blurDataURL={photo.asset.metadata.lqip}
          width={400}
          height={300}
          quality={100}
          alt={photo.alt}
        />
      </div>
    </div>
  );
};
