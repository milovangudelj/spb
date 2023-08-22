import Link from "next/link";
import { Link as SanityLink } from "~/sanity/lib/types";

export const Footer = ({ links }: { links: SanityLink[] }) => {
  return (
    <footer className="px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
        footer
      </div>
    </footer>
  );
};
