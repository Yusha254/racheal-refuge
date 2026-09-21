import type { Metadata } from "next";
import { ProgramsPage } from "@/components/programs/ProgramsPage";

export const metadata: Metadata = {
  title: "Our Programs",
};

export default function Programs() {
  return <ProgramsPage activePath="/programs" />;
}
