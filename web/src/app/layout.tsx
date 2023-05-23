import "@/styles/globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Ubuntu } from "@next/font/google";

const montserrat = Ubuntu({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hostshare",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
