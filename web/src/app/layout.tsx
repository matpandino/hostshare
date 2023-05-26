import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Nunito_Sans } from "@next/font/google";
import CategoriesFilter from "@/components/CategoriesFilter/CategoriesFilter";
import Search from "@/components/Search/Search";

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
        <header className="sticky top-0 z-50 flex flex-col items-center border-b border-gray-200 bg-white">
          <Search />
          {/* @ts-expect-error Server Component */}
          <CategoriesFilter />
        </header>
        <main className="flex flex-1 justify-center">{children}</main>
      </body>
    </html>
  );
}
