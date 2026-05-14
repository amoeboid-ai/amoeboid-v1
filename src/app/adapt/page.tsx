import { SystemPage } from "@/components/site/SystemPage";
import { ADAPT_PAGE } from "@/lib/systemPages";

export const metadata = {
  title: ADAPT_PAGE.metaTitle,
  description: ADAPT_PAGE.metaDescription,
};

export default function AdaptPage() {
  return <SystemPage data={ADAPT_PAGE} />;
}
