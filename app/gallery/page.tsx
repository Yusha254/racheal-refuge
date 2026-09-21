import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Rachel's Refuge",
  description:
    "Explore memorable moments from Rachel's Refuge - empowering girls through basketball, mentorship, teamwork, and community.",
};

export default function Page() {
  return <GalleryPage />;
}
