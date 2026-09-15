import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Arfa Muhammad Fadhillah — Portfolio",
  description:
    "Arfa Muhammad Fadhillah Portfolio — Software Engineer. Crafting meaningful digital experiences.",
  openGraph: {
    title: "Arfa Muhammad Fadhillah — Portfolio",
    description:
      "Software Engineer & Developer. Crafting meaningful digital experiences.",
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    images: [
      {
        url: "/img/arfa.jpeg",
        width: 640,
        height: 640,
        alt: "Arfa Muhammad Fadhillah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arfa Muhammad Fadhillah — Portfolio",
    description:
      "Software Engineer & Developer. Crafting meaningful digital experiences.",
    images: ["/img/arfa.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-bg text-cream font-serif text-lg leading-relaxed">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}