import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const lastUpdated = "May 13, 2026";
const contactEmail = "efkanertas1@gmail.com";

const policySections = [
  {
    title: "Overview",
    body: [
      "Idle Junkyard Empire is a mobile idle game developed by Efkan Ertas.",
      "This Privacy Policy explains how data is handled when you use the game. The game does not require users to create an account.",
    ],
  },
  {
    title: "Data Collection and Use",
    body: [
      "The game does not directly collect names, email addresses, messages, photos, videos, audio files, contacts, calendar data, health data, or financial account information from users.",
      "Because the game may include advertising and optional platform services, third-party providers may collect or process limited technical data as described below.",
    ],
  },
  {
    title: "Local Save Data",
    body: [
      "The game stores gameplay progress locally on your device. You can delete this data by clearing the app data, uninstalling the app, or using the in-game reset/delete save option if available. For privacy-related requests, contact efkanertas1@gmail.com.",
    ],
  },
  {
    title: "Advertising",
    body: [
      "Idle Junkyard Empire may display advertisements through Google AdMob or other Google advertising services.",
      "Ads and third-party advertising services may collect or process data such as device identifiers, approximate location, app interactions, diagnostics, crash logs, and performance data. This data may be used for advertising, analytics, fraud prevention, security, and compliance.",
    ],
  },
  {
    title: "In-App Purchases",
    body: [
      "The game may offer optional in-app purchases through Google Play Billing.",
      "Payment processing is handled by Google Play. The developer does not directly collect or store payment card numbers, bank account information, or other payment credentials.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "Data related to advertising and app performance may be processed by third-party services such as Google AdMob according to their own privacy practices.",
      "The developer does not sell users' personal information.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "Data transmitted by third-party services is expected to be protected in transit using standard security measures such as HTTPS/TLS.",
      "Local game progress remains stored on the user's device unless removed by the user.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Idle Junkyard Empire is not specifically directed to children under 13.",
      "If you believe a child has provided personal information through the game, contact efkanertas1@gmail.com.",
    ],
  },
  {
    title: "User Choices and Data Deletion",
    body: [
      "Users can delete local gameplay data by clearing the app data, uninstalling the app, or using the in-game reset/delete save option if available.",
      "Users may also contact efkanertas1@gmail.com for privacy-related requests.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about this Privacy Policy, contact Efkan Ertas at efkanertas1@gmail.com.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Idle Junkyard Empire",
  description:
    "Privacy Policy for Idle Junkyard Empire, a mobile idle game developed by Efkan Ertas.",
  openGraph: {
    title: "Privacy Policy | Idle Junkyard Empire",
    description:
      "Privacy Policy for Idle Junkyard Empire, a mobile idle game developed by Efkan Ertas.",
    type: "article",
  },
};

export default function IdleJunkyardEmpirePrivacyPolicyPage() {
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
                Idle Junkyard Empire
              </p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-on-surface md:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-5 text-base leading-7 text-on-surface-variant md:text-lg">
                This page explains how data is handled when you use Idle
                Junkyard Empire, a mobile idle game developed by Efkan Ertas.
              </p>
              <dl className="mt-8 grid gap-4 rounded-lg border border-outline-variant bg-surface-low p-5 text-sm md:grid-cols-3">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    App
                  </dt>
                  <dd className="mt-2 text-on-surface">Idle Junkyard Empire</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    Developer
                  </dt>
                  <dd className="mt-2 text-on-surface">Efkan Ertas</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    Last Updated
                  </dt>
                  <dd className="mt-2 text-on-surface">{lastUpdated}</dd>
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
