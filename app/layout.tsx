import type { Metadata } from "next";
import { Noto_Serif_Bengali, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import QueryProvider from "@/context/query-provider";
import ContextProgressProvider from "@/context/progress-provider";

const manropeSans = Outfit({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
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
        className={`${manropeSans.variable} ${assameseSans.variable} antialiased`}
      >
        <QueryProvider>
          <ContextProgressProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme={"dark"}
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ContextProgressProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
