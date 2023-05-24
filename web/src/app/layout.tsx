import "@/styles/globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Raleway } from "@next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hostshare",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={raleway.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
