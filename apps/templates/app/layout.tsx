import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Provider from "@app/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doom UI Pro",
  description: "Doom UI Pro Templates to make web apps in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
