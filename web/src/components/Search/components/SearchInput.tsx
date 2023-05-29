import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className="placeholderL:text-gray-500 flex items-center justify-center gap-2 rounded-3xl border border-gray-200 bg-white py-2 pe-2 ps-4 text-sm shadow-md">
      <input className="focus:outline-none" placeholder="Search..." />
      <Link
        href="/search"
        prefetch={false}
        className="flex aspect-square h-8 items-center justify-center rounded-full bg-primary text-white"
      >
        <FaSearch />
      </Link>
    </div>
  );
}
