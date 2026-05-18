import { Facebook, Instagram } from "lucide-react";
import { siYelp } from "simple-icons";
import { SITE } from "@/lib/site";

function YelpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d={siYelp.path} />
    </svg>
  );
}

const iconClass = "h-4 w-4 sm:h-[18px] sm:w-[18px]";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  const baseLink =
    linkClassName ??
    "rounded-full p-2 text-charcoal/80 transition-colors hover:bg-forest/10 hover:text-forest";

  return (
    <div className={`flex items-center gap-1 ${className ?? ""}`}>
      <a
        href={SITE.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={baseLink}
        aria-label="Facebook"
      >
        <Facebook className={iconClass} strokeWidth={1.75} />
      </a>
      <a
        href={SITE.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={baseLink}
        aria-label="Instagram"
      >
        <Instagram className={iconClass} strokeWidth={1.75} />
      </a>
      <a
        href={SITE.socials.yelp}
        target="_blank"
        rel="noopener noreferrer"
        className={baseLink}
        aria-label="Yelp"
      >
        <YelpIcon className={iconClass} />
      </a>
    </div>
  );
}
