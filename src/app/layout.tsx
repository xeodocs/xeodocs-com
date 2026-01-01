import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/atom-one-dark.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xeodocs.com"),
  title: {
    default: "XeoDocs",
    template: "%s | XeoDocs",
  },
  description: "An Open Source Documentation translation project using Artificial Intelligence to keep translations always up-to-date and available in multiple languages.",
  openGraph: {
    title: "XeoDocs",
    description: "An Open Source Documentation translation project using Artificial Intelligence to keep translations always up-to-date and available in multiple languages.",
    url: "https://xeodocs.com",
    siteName: "XeoDocs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XeoDocs",
    description: "An Open Source Documentation translation project using Artificial Intelligence to keep translations always up-to-date and available in multiple languages.",
    creator: "@xeodocs",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// ... (imports)

// ... (metadata)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(outfit.variable, "antialiased min-h-screen bg-background font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
