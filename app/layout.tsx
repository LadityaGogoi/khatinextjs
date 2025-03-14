import type { Metadata } from "next";
import { Manjari } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import QueryProvider from "@/context/query-provider";

const manropeSans = Manjari({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  weight: ["100", "400", "700"]
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
        className={`${manropeSans.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
