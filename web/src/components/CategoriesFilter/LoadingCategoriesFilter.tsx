import React from "react";
import Skeleton from "react-loading-skeleton";

export default function LoadingCategoriesFilter() {
  return (
    <div className="flex h-[68px] w-[92%] justify-center overflow-auto">
      <div className="block h-full  w-full py-2">
        <Skeleton className="flex" width="100%" height="100%" />
      </div>
    </div>
  );
}
