import type { NavLink } from "@/types";

// Single source of truth for the primary nav, mirrored from the example HTML
// pages' <nav> markup, now pointed at real Next.js routes.
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/owners-progress" },
  { label: "Gallery", href: "/gallery" },
  { label: "Board Members", href: "/board" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export const footerWebsiteLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/owners-progress" },
  { label: "Programs", href: "/programs" },
];

export const footerExploreLinks: NavLink[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Board Members", href: "/board" },
  { label: "Contact", href: "/contact" },
];

export const contactDetails = {
  email: "ianyeshua06@gmail.com",
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  location: "Nairobi, Kenya",
};
