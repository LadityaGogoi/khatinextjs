import type { Metadata } from "next";
import { Manjari, Noto_Serif_Bengali, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import QueryProvider from "@/context/query-provider";
import ContextProgressProvider from "@/context/progress-provider";
import { Analytics } from '@vercel/analytics/next'

const manropeSans = Outfit({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const manjariSans = Manjari({
  variable: "--font-manjari-sans",
  subsets: ["latin"],
  weight: ["100", "400", "700"]
});

const assameseSans = Noto_Serif_Bengali({
  variable: "--font-assamese-sans",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Khati Home",
  description: "all in one app for assamese students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manropeSans.variable} ${assameseSans.variable} ${manjariSans.variable} antialiased`}
      >
        <QueryProvider>
          <ContextProgressProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme={"light"}
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
            </ThemeProvider>
          </ContextProgressProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
