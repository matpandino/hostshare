import "@/styles/globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Nunito_Sans } from "@next/font/google";
import CategoriesFilter from "@/components/CategoriesFilter/CategoriesFilter";

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
      <body>
        <main>
          {/* @ts-expect-error Server Component */}
          <CategoriesFilter />
          {children}
        </main>
      </body>
    </html>
  );
}
