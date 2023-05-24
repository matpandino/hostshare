import "@/styles/globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Nunito_Sans } from "@next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hostshare",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
