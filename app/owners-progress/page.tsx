import type { Metadata } from "next";
import { OwnersPage } from "@/components/owners/OwnersPage";

export const metadata: Metadata = {
  title: "About Us | Rachel's Refuge",
  description:
    "Learn about Rachel's Refuge, Rachel Odima's inspiring legacy, our mission, values, and progress in empowering girls through basketball.",
};

export default function OwnersProgress() {
  return <OwnersPage activePath="/owners-progress" />;
}
