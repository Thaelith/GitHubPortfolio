import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Context Deck Privacy Policy | Efkan Ertas",
  description:
    "Privacy policy for Context Deck, an offline Android app for ready-to-use message cards.",
};

const effectiveDate = "May 23, 2026";
const contactEmail = "efkanertas1@gmail.com";

const englishSections = [
  {
    title: "Overview",
    body: [
      "Context Deck is an offline Android app that helps you find ready-to-use message cards for everyday situations. The app is designed to be private, local-first, and simple to use.",
      "Context Deck does not use AI inside the app. Message templates are predefined and stored locally in the app.",
    ],
  },
  {
    title: "Accounts and Servers",
    body: [
      "No account is required to use Context Deck.",
      "Context Deck does not use a backend server for message templates or user content. Message templates are stored locally in the app.",
      "User-edited messages stay on your device unless you choose to copy or share them.",
    ],
  },
  {
    title: "Local Data",
    body: [
      "Favorites, language preference, theme preference, and default tone preference are stored locally on your device.",
      "Context Deck does not upload your saved cards, edited messages, preferences, or template content to developer servers.",
    ],
  },
  {
    title: "Copying and Sharing",
    body: [
      "When you copy a message, Context Deck uses the Android clipboard.",
      "When you share a message, Context Deck uses the Android system share sheet. The destination app you choose controls what happens to the message after sharing.",
    ],
  },
  {
    title: "No Ads, Analytics, Billing, or Crash Reporting in v1",
    body: [
      "Context Deck v1 does not include ads, analytics, crash reporting, billing, or subscriptions.",
      "If a future version adds analytics, billing, cloud sync, crash reporting, accounts, or backend services, this policy will be updated.",
    ],
  },
  {
    title: "Wording Help Only",
    body: [
      "Formal/legal-adjacent and healthcare/admin templates are for wording help only. They are not legal, medical, or professional advice.",
    ],
  },
  {
    title: "Contact",
    body: [
      `If you have questions about this privacy policy, contact ${contactEmail}.`,
    ],
  },
];

const turkishSections = [
  {
    title: "Kısa Özet",
    body: [
      "Context Deck, günlük durumlar için hazır mesaj kartları sunan çevrimdışı bir Android uygulamasıdır. Uygulama gizlilik odaklı ve cihaz üzerinde çalışacak şekilde tasarlanmıştır.",
      "Context Deck uygulama içinde AI kullanmaz. Mesaj şablonları önceden hazırlanmıştır ve uygulamanın içinde yerel olarak saklanır.",
    ],
  },
  {
    title: "Hesap ve Sunucu Kullanımı",
    body: [
      "Context Deck'i kullanmak için hesap gerekmez.",
      "Context Deck, mesaj şablonları veya kullanıcı içeriği için backend sunucu kullanmaz.",
      "Kullanıcının düzenlediği mesajlar, kopyalanmadıkça veya paylaşılmadıkça cihazda kalır.",
    ],
  },
  {
    title: "Cihazda Saklanan Veriler",
    body: [
      "Favoriler, dil tercihi, tema tercihi ve varsayılan ton tercihi cihazda yerel olarak saklanır.",
      "Context Deck, kaydedilen kartları, düzenlenen mesajları, tercihleri veya şablon içeriklerini geliştirici sunucularına yüklemez.",
    ],
  },
  {
    title: "Kopyalama ve Paylaşma",
    body: [
      "Bir mesajı kopyaladığınızda Context Deck Android panosunu kullanır.",
      "Bir mesajı paylaştığınızda Context Deck Android sistem paylaşım ekranını kullanır. Paylaşımdan sonra mesaja ne olacağını seçtiğiniz hedef uygulama belirler.",
    ],
  },
  {
    title: "v1'de Reklam, Analitik, Ödeme veya Hata Raporlama Yok",
    body: [
      "Context Deck v1 reklam, analitik, hata raporlama, ödeme veya abonelik içermez.",
      "Gelecekte analitik, ödeme, bulut senkronizasyonu, hata raporlama, hesap veya backend hizmetleri eklenirse bu politika güncellenecektir.",
    ],
  },
  {
    title: "Yalnızca İfade Yardımı",
    body: [
      "Resmi/hukuki benzeri ve sağlık/idari şablonlar yalnızca mesaj yazımına yardım içindir. Hukuki, tıbbi veya profesyonel tavsiye değildir.",
    ],
  },
];

export default function ContextDeckPrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <section className="container-shell py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </Link>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {contactEmail}
          </a>
        </div>

        <div className="mx-auto max-w-4xl">
          <header className="mb-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Privacy Policy
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-foreground)] md:text-5xl">
              Context Deck Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Effective date: {effectiveDate}
            </p>
          </header>

          <article className="subtle-panel p-6 md:p-8">
            <div className="space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-[var(--color-foreground)]">
                  English
                </h2>
                <div className="space-y-6">
                  {englishSections.map((section) => (
                    <section key={section.title}>
                      <h3 className="mb-2 text-lg font-semibold text-[var(--color-foreground)]">
                        {section.title}
                      </h3>
                      <div className="space-y-3 text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>

              <div className="h-px bg-[var(--color-border)]" />

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-[var(--color-foreground)]">
                  Türkçe
                </h2>
                <div className="space-y-6">
                  {turkishSections.map((section) => (
                    <section key={section.title}>
                      <h3 className="mb-2 text-lg font-semibold text-[var(--color-foreground)]">
                        {section.title}
                      </h3>
                      <div className="space-y-3 text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
