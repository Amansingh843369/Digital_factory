 import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Digital Factory",
  description:
    "How Digital Factory collects, uses, stores and protects your personal information.",
};

 
const COMPANY = "Digital Factory";
const LAST_UPDATED = "30 September 2026";
const EMAIL = "info@digital-factory.in";
const PHONE = "+91 97680 19387";
const ADDRESS = "912, 72 Corp, Saki Vihar Road,Sakinaka Junction, Andheri East, Mumbai – 400072, Maharashtra,India";

type Section = {
  title: string;
  intro?: string;
  items?: string[];
  outro?: string;
  extra?: { heading: string; intro?: string; items: string[] }[];
};

const sections: Section[] = [
  {
    title: "Information we collect",
    intro:
      "When you contact us or fill in an enquiry form on our website, we may collect:",
    items: [
      "Name",
      "Email address",
      "Phone number",
      "Company or organization name",
      "Business requirements or project details",
      "Any other information you choose to share with us",
    ],
    extra: [
      {
        heading: "Information collected automatically",
        intro: "When you visit our website, we may also collect limited technical data:",
        items: [
          "IP address",
          "Browser type and version",
          "Device information and operating system",
          "Pages visited, and date and time of access",
        ],
      },
    ],
  },
  {
    title: "How we use your information",
    intro: `${COMPANY} uses this information to:`,
    items: [
      "Respond to your enquiries and requests",
      "Understand your business or technical requirements",
      "Provide website development, software development, digital marketing, cybersecurity and related services",
      "Communicate with you about projects, quotes and support",
      "Improve our website, services and user experience",
      "Keep our website secure and prevent fraud or misuse",
      "Comply with legal and regulatory requirements",
    ],
    outro:
      "We use personal information only for the purposes described in this policy.",
  },
  {
    title: "Cookies",
    intro:
      "Our website may use cookies or similar technologies to make the site work properly, understand how it is used, and improve your experience. You can control or disable cookies in your browser settings. Disabling some cookies may affect how parts of the website work.",
  },
  {
    title: "Sharing of information",
    intro: `${COMPANY} does not sell or rent your personal information. We may share it only when reasonably necessary with trusted service providers such as hosting, email, analytics and other technology partners, in order to:`,
    items: [
      "Operate our website",
      "Provide the services you requested",
      "Maintain our technical infrastructure",
      "Provide customer support",
      "Protect our website and systems",
      "Comply with legal obligations or lawful requests from authorities",
    ],
    outro:
      "These providers may only use your information to perform services for us. If your data is processed outside your country, we take reasonable steps to keep it protected.",
  },
  {
    title: "Data security",
    intro:
      "We use reasonable technical and organizational measures to protect personal information from unauthorized access, alteration, disclosure, misuse, loss or destruction. However, no method of internet transmission or electronic storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Data retention",
    intro:
      "We keep personal information only as long as needed for the purpose it was collected, to provide requested services, maintain business records, resolve disputes, enforce agreements, or meet legal requirements. When it is no longer needed, we securely delete or anonymize it, unless the law requires us to keep it.",
  },
  {
    title: "Your privacy rights",
    intro: "Depending on the law that applies to you, you may have the right to:",
    items: [
      "Ask what personal data we hold about you",
      "Ask us to correct inaccurate or incomplete data",
      "Ask us to delete your personal data",
      "Withdraw your consent at any time",
      "Make a complaint about how we handle your data",
    ],
    outro:
      "To use any of these rights, email us at the address below. Withdrawing consent does not affect processing done before the withdrawal. We will try to respond within a reasonable time.",
  },
  {
    title: "Third-party websites",
    intro: `Our website may link to third-party websites or services. ${COMPANY} is not responsible for their privacy practices, security or content. Please read their privacy policies before sharing personal information with them.`,
  },
  {
    title: "Children's privacy",
    intro:
      "Our website and services are meant for businesses and adults, and are not directed at children. We do not knowingly collect personal information from children. If you believe a child has given us their information, contact us and we will delete it.",
  },
  {
    title: "Changes to this policy",
    intro: `We may update this Privacy Policy from time to time to reflect changes in our services, technology or legal requirements. The updated version will be published on this page with a new "Last updated" date.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <header className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-6 leading-relaxed">
            At {COMPANY}, we respect your privacy and are committed to
            protecting the personal information you share with us through our
            website, services and communication channels. This policy explains
            what we collect, why we collect it, and how we look after it.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>

              {s.intro && <p className="mt-3 leading-relaxed">{s.intro}</p>}

              {s.items && (
                <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-gray-400">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}

              {s.extra?.map((e) => (
                <div key={e.heading} className="mt-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    {e.heading}
                  </h3>
                  {e.intro && <p className="mt-2 leading-relaxed">{e.intro}</p>}
                  <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-gray-400">
                    {e.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {s.outro && <p className="mt-3 leading-relaxed">{s.outro}</p>}
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact us</h2>
            <p className="mt-3 leading-relaxed">
              For questions, requests or complaints about this Privacy Policy or
              how we handle your personal information, contact:
            </p>
            <address className="mt-4 space-y-1 rounded-lg border border-gray-200 bg-gray-50 p-5 not-italic">
              <p className="font-semibold text-gray-900">{COMPANY}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  {EMAIL}
                </a>
              </p>
              <p>Phone: {PHONE}</p>
              <p>Address: {ADDRESS}</p>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}

/*
  

  <label className="flex items-start gap-2 text-sm text-gray-600">
    <input type="checkbox" required className="mt-1" />
    <span>
      I have read the{" "}
      <a href="/privacy-policy" className="underline">Privacy Policy</a> and
      agree that Digital Factory may use my details to respond to my enquiry
      and provide relevant services.
    </span>
  </label>
*/