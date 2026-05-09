import { SystemPage } from "@/components/site/SystemPage";
import { SENSE_PAGE } from "@/lib/systemPages";

export const metadata = {
  title: SENSE_PAGE.metaTitle,
  description: SENSE_PAGE.metaDescription,
};

export default function SensePage() {
  return <SystemPage data={SENSE_PAGE} />;
}
