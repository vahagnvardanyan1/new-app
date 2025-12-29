import type { Metadata } from "next";

import { LegalDocument } from "@/components/marketing/legal-document";
import { Container } from "@/components/ui/container";
import { termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Automation Agency",
  description: "Read the Terms of Service that govern use of our website and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const TermsOfServicePage = () => {
  return (
    <Container className="pb-20 pt-28 sm:pt-32">
      <LegalDocument document={termsOfService} />
    </Container>
  );
};

export default TermsOfServicePage;


