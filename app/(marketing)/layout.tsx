import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { navItems } from "@/content/marketing";

type MarketingLayoutProps = {
  children: ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <>
      <SiteHeader navItems={navItems} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default MarketingLayout;


