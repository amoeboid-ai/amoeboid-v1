import { SystemPage } from "@/components/site/SystemPage";
import { REACH_PAGE } from "@/lib/systemPages";

export const metadata = {
  title: REACH_PAGE.metaTitle,
  description: REACH_PAGE.metaDescription,
};

export default function ReachPage() {
  return <SystemPage data={REACH_PAGE} />;
}
