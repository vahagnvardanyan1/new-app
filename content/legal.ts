export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "December 29, 2025",
  intro: [
    "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.",
    "By using our website, you agree to the collection and use of information in accordance with this Policy.",
  ],
  sections: [
    {
      title: "Information We Collect",
      paragraphs: ["We may collect information that you provide directly and information collected automatically."],
      bullets: [
        "Contact information (such as name, email address, phone number) when you submit a form or request a consultation.",
        "Business information you choose to share (such as company name, role, project needs).",
        "Usage data (such as pages visited, time spent, device/browser information, and approximate location) collected through cookies or similar technologies.",
      ],
    },
    {
      title: "How We Use Information",
      paragraphs: ["We use information to operate, improve, and provide our services, including to:"],
      bullets: [
        "Respond to inquiries and provide customer support.",
        "Schedule and conduct calls or consultations you request.",
        "Improve website performance, security, and user experience.",
        "Send service-related communications and, where permitted, marketing updates you can opt out of at any time.",
      ],
    },
    {
      title: "Cookies and Similar Technologies",
      paragraphs: [
        "We may use cookies and similar technologies to remember preferences and understand how visitors use our website.",
        "You can control cookies through your browser settings; disabling cookies may impact site functionality.",
      ],
    },
    {
      title: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share information in limited circumstances, including:",
      ],
      bullets: [
        "With service providers who help us operate the website and deliver services (e.g., hosting, analytics, communications).",
        "To comply with legal obligations or respond to lawful requests.",
        "To protect our rights, users, and the security of our services.",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: ["We retain information only as long as necessary for the purposes described in this Policy, unless a longer retention period is required by law."],
    },
    {
      title: "Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and physical safeguards designed to protect information.",
        "No method of transmission or storage is 100% secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Your Choices",
      paragraphs: ["Depending on your location, you may have rights regarding your personal information, such as access, correction, deletion, or objection to processing."],
    },
    {
      title: "Children’s Privacy",
      paragraphs: ["Our website is not directed to children under 13, and we do not knowingly collect personal information from children."],
    },
    {
      title: "Changes to This Policy",
      paragraphs: ["We may update this Privacy Policy from time to time. We will update the “Last updated” date at the top of this page."],
    },
    {
      title: "Contact Us",
      paragraphs: ["If you have questions about this Privacy Policy, contact us at hello@agency.com."],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "December 29, 2025",
  intro: [
    "These Terms of Service govern your access to and use of our website and services.",
    "By accessing or using the website, you agree to be bound by these Terms.",
  ],
  sections: [
    {
      title: "Use of the Website",
      paragraphs: [
        "You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use of the website.",
      ],
      bullets: [
        "You may not attempt to gain unauthorized access to any portion of the website or systems.",
        "You may not interfere with or disrupt the integrity or performance of the website.",
      ],
    },
    {
      title: "Services and Engagements",
      paragraphs: [
        "Any professional services (including automation, IT solutions, marketing, consulting, design, or development) are provided under separate written agreements (e.g., statement of work, proposal, or contract) that may include additional terms.",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "All website content, including text, graphics, logos, and design, is owned by us or our licensors and is protected by applicable intellectual property laws.",
        "You may not copy, reproduce, distribute, or create derivative works from the website content without prior written permission, except as permitted by law.",
      ],
    },
    {
      title: "Third-Party Links",
      paragraphs: [
        "The website may contain links to third-party websites or services. We are not responsible for their content, policies, or practices.",
      ],
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "The website is provided on an “as is” and “as available” basis. We make no warranties, express or implied, regarding the website’s operation or the information provided.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of the website.",
      ],
    },
    {
      title: "Indemnification",
      paragraphs: [
        "You agree to indemnify and hold us harmless from any claims, damages, liabilities, and expenses arising out of your use of the website or violation of these Terms.",
      ],
    },
    {
      title: "Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. We will update the “Last updated” date at the top of this page.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: ["If you have questions about these Terms, contact us at hello@agency.com."],
    },
  ],
};


