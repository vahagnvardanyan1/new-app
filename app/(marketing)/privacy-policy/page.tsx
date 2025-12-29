import type { Metadata } from "next";

import { LegalDocument } from "@/components/marketing/legal-document";
import { Container } from "@/components/ui/container";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Automation Agency",
  description: "Read our Privacy Policy to understand how we collect and use information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <Container className="pb-20 pt-28 sm:pt-32">
      <LegalDocument document={privacyPolicy} />
    </Container>
  );
};

export default PrivacyPolicyPage;


