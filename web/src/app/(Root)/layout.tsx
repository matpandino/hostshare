import "react-loading-skeleton/dist/skeleton.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-day-picker/dist/style.css";
import "@/styles/globals.css";
import React, { type ReactNode } from "react";
import { type Metadata } from "next";
import { Nunito_Sans } from "@next/font/google";
import CategoriesFilter from "@/components/CategoriesFilter/CategoriesFilter";
import Search from "@/components/Search/Search";
import LoadingCategoriesFilter from "@/components/CategoriesFilter/LoadingCategoriesFilter";

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
        <header className="sticky top-0 z-50 flex h-header max-h-header max-w-[vw] flex-col items-center border-b border-gray-200 bg-white">
          <Search />
          <React.Suspense fallback={<LoadingCategoriesFilter />}>
            {/* @ts-expect-error Server Component */}
            <CategoriesFilter />
          </React.Suspense>
        </header>
        <main className="flex flex-1 justify-center">{children}</main>
      </body>
    </html>
  );
}
