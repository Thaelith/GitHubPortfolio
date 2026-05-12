import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Efkan Ertaş | Computer Engineering Student",
  description:
    "Minimal software engineering portfolio for Efkan Ertaş, focused on Android development, Kotlin, Java, and game development.",
  openGraph: {
    title: "Efkan Ertaş | Computer Engineering Student",
    description:
      "Portfolio focused on Android development, Kotlin, Java, and game development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-dvh bg-background font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
