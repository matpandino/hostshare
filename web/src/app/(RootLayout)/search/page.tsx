import Map from "@/components/Map/Map";
import { Properties } from "@/components/Properties";
import { LoadingProperties } from "@/components/Properties/LoadingProperties";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="relative flex max-w-full flex-1 justify-center px-5 md:px-0">
      <div className="flex w-full md:w-full md:px-5">
        <Suspense fallback={<LoadingProperties />}>
          {/* @ts-expect-error Server Component */}
          <Properties />
        </Suspense>
      </div>
      <div className="sticky hidden md:top-[theme(height.header)] md:flex md:h-[calc(100vh-theme(height.header))] md:w-2/3">
        <Map />
      </div>
    </div>
  );
}
