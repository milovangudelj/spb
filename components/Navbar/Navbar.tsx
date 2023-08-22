import Link from "next/link";
import { Link as SanityLink } from "~/sanity/lib/types";

export const Navbar = ({ links }: { links: SanityLink[] }) => {
  return (
    <div className="sticky top-0 z-10 bg-zinc-950/50 px-8 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
        <Link href="/" className="text-h6">
          Sanity Page Builder
        </Link>
        <nav>
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link._key}>
                {link._type === "pageLink" ? (
                  <Link
                    href={link.slug.current}
                    className="px-4 py-2 text-button text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.url}
                    rel="noopener noreferrer"
                    target={link.newTab ? "_blank" : "_self"}
                    className="px-4 py-2 text-button text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
