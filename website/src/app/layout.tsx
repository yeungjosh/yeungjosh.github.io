import type { Metadata } from "next";
// Temporarily commented out due to network restrictions in build environment
// import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-dm-sans",
// });

export const metadata: Metadata = {
  title: "Josh Yeung - Software Engineer",
  description: "Software Engineer at Amazon specializing in Software Development, Large Language Models, and building beautiful web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="website-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
