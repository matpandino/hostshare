import Image from "next/image";
import React from "react";

export default function Search() {
  return (
    <div className="flex h-20 w-full max-w-[92%] flex-row items-center justify-between">
      <Image
        src="/hostshare-green.png"
        alt="hostshare green logo"
        width="160"
        height="70"
      />
      <div>Search</div>
      <div>ProfileInfo</div>
    </div>
  );
}
