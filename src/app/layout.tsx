import type { Metadata } from "next";
import { Oswald, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athul RAJ P R — Cyberpunk UI/UX Designer & Developer",
  description: "Portfolio of Athul RAJ P R, UI/UX Designer and Computer Science Engineer shaping user-centered digital products for 150K+ followers.",
  keywords: ["Athul RAJ P R", "UI UX Designer", "Computer Science Student", "Portfolio", "Cyberpunk Portfolio", "Next.js", "Figma", "Tailwind CSS"],
  authors: [{ name: "Athul RAJ P R" }],
  openGraph: {
    title: "Athul RAJ P R — Cyberpunk UI/UX Portfolio",
    description: "UI/UX Designer shaping user-centered digital products & scalable interactive experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cyber-bg text-cyber-text antialiased selection:bg-cyber-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
