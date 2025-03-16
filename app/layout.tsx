import type { Metadata } from "next";
import { Anek_Bangla, Hind_Siliguri, Manjari, Mina, Noto_Sans_Bengali, Noto_Serif_Bengali, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import QueryProvider from "@/context/query-provider";
import ContextProgressProvider from "@/context/progress-provider";

const manropeSans = Manjari({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  weight: ["100", "400", "700"]
});

const assameseSans = Mina({
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
