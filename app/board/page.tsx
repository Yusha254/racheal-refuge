import type { Metadata } from "next";
import { BoardPage } from "@/components/board/BoardPage";

export const metadata: Metadata = {
  title: "Board Members | Rachel's Refuge",
  description:
    "Meet the dedicated leadership team and board members guiding Rachel's Refuge and empowering girls through basketball.",
};

export default function Page() {
  return <BoardPage />;
}
