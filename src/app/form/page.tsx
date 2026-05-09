import { SystemPage } from "@/components/site/SystemPage";
import { FORM_PAGE } from "@/lib/systemPages";

export const metadata = {
  title: FORM_PAGE.metaTitle,
  description: FORM_PAGE.metaDescription,
};

export default function FormPage() {
  return <SystemPage data={FORM_PAGE} />;
}
