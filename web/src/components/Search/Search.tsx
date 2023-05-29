import Image from "next/image";
import React from "react";
import SearchInput from "./components/SearchInput";
import Link from "next/link";

export default function Search() {
  return (
    <div className="flex h-20 w-full max-w-[92%] flex-row items-center justify-between">
      <div className="flex-1">
        <Link href="/" prefetch={false}>
          <Image
            src="/hostshare-green.png"
            alt="hostshare green logo"
            width="183"
            height="40"
          />
        </Link>
      </div>
      <SearchInput />
      <div className="flex flex-1 justify-end">
        <span className="block">Profile</span>
      </div>
    </div>
  );
}
