import type { Metadata } from "next";
import { Manjari } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";

const manjariSans = Manjari({
  variable: "--font-manjari-sans",
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
        className={`${manjariSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
