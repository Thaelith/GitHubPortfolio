import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const effectiveDate = "May 19, 2026";
const contactEmail = "efkanertas1@gmail.com";

const googlePrivacyLinks = [
  {
    label: "Google Privacy Policy",
    href: "https://policies.google.com/privacy",
  },
  {
    label: "Google Mobile Ads SDK data disclosure",
    href: "https://developers.google.com/admob/android/privacy/play-data-disclosure",
  },
  {
    label: "Google AdMob privacy information",
    href: "https://developers.google.com/admob/android/privacy",
  },
];

const policySections = [
  {
    title: "Information We Collect",
    body: [
      "Cylinder Climb does not require users to create an account.",
      "The app code is not designed to directly collect names, email addresses, messages, photos, videos, contacts, calendar data, health data, or financial account information from users.",
      "The app may process limited technical data through third-party SDKs used for advertising, as described below.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Cylinder Climb may use third-party services, including Google Mobile Ads SDK and AdMob, to display ads and support app operation.",
      "These services may collect or process data according to their own privacy policies and technical requirements. You can review Google's privacy and mobile ads documentation using the links below.",
    ],
    links: googlePrivacyLinks,
  },
  {
    title: "Advertising",
    body: [
      "Cylinder Climb uses advertising services such as Google Mobile Ads / AdMob.",
      "Advertising services may collect or process device identifiers, approximate location, ad interactions, diagnostics, and other data according to their own policies.",
      "This data may be used by those services for purposes such as ad delivery, frequency capping, fraud prevention, analytics, security, and compliance.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Cylinder Climb is not intentionally directed to children under 13.",
      "If the final Google Play target audience for the game changes later, this Privacy Policy may need to be updated to reflect the applicable audience and legal requirements.",
      "If you believe a child has provided personal information through the game, contact efkanertas1@gmail.com.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "The developer does not operate a user account system for Cylinder Climb.",
      "Any local gameplay data or settings stored by the app remain on the user's device unless removed by the user through device settings, app deletion, or an in-game reset option if one is available.",
      "Data processed by third-party advertising services is retained according to those services' own policies.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can limit or reset advertising identifiers through your device settings where supported by your operating system.",
      "You can remove local app data by clearing the app data or uninstalling the app.",
      "For privacy-related questions or requests, contact efkanertas1@gmail.com.",
    ],
  },
  {
    title: "Security",
    body: [
      "Reasonable care is taken to avoid collecting unnecessary information directly through the game.",
      "Data processed by third-party services is handled according to those services' security practices. Google states that data collected by the Google Mobile Ads SDK is encrypted in transit.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "This Privacy Policy may be updated if Cylinder Climb changes its features, advertising setup, third-party services, or legal requirements.",
      "The effective date at the top of this page will be updated when meaningful changes are made.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about this Privacy Policy or privacy-related requests, contact Efkan Ertas at efkanertas1@gmail.com.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cylinder Climb Privacy Policy",
  description: "Privacy Policy for the Cylinder Climb mobile game.",
  openGraph: {
    title: "Cylinder Climb Privacy Policy",
    description: "Privacy Policy for the Cylinder Climb mobile game.",
    type: "article",
  },
};

export default function CylinderClimbPrivacyPolicyPage() {
  return (
    <>
      <header className="border-b border-outline-variant bg-background/95 backdrop-blur">
        <div className="container-shell flex h-16 items-center justify-between">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded font-display text-sm font-semibold text-on-surface transition hover:text-primary"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Efkan Ertas
          </Link>
          <a
            href={`mailto:${contactEmail}`}
            className="focus-ring inline-flex items-center gap-2 rounded text-sm font-medium text-on-surface-variant transition hover:text-primary"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-outline-variant/45 py-16 md:py-24">
          <div className="container-shell">
            <div className="max-w-3xl animate-section-in">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                Cylinder Climb
              </p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-on-surface md:text-5xl">
                Privacy Policy for Cylinder Climb
              </h1>
              <p className="mt-5 text-base leading-7 text-on-surface-variant md:text-lg">
                This Privacy Policy explains how data is handled when you use
                Cylinder Climb, a mobile game developed by Efkan Ertas.
              </p>
              <dl className="mt-8 grid gap-4 rounded-lg border border-outline-variant bg-surface-low p-5 text-sm md:grid-cols-3">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    Game
                  </dt>
                  <dd className="mt-2 text-on-surface">Cylinder Climb</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    Developer
                  </dt>
                  <dd className="mt-2 text-on-surface">Efkan Ertas</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    Effective Date
                  </dt>
                  <dd className="mt-2 text-on-surface">{effectiveDate}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container-shell">
            <article className="subtle-panel max-w-4xl rounded-lg p-6 md:p-10">
              <div className="space-y-10">
                {policySections.map((section) => (
                  <section key={section.title}>
                    <h2 className="border-b border-outline-variant pb-3 font-display text-xl font-semibold text-on-surface md:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-on-surface-variant md:text-base">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.links ? (
                        <ul className="space-y-2 pt-1">
                          {section.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="focus-ring inline-flex items-center gap-2 rounded text-on-surface underline decoration-outline-variant underline-offset-4 transition hover:text-primary hover:decoration-primary"
                              >
                                {link.label}
                                <ExternalLink
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                />
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
