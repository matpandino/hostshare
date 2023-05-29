import { Properties } from "@/components/Properties";
import { LoadingProperties } from "@/components/Properties/LoadingProperties";
import { Suspense } from "react";

export default function Page({
  searchParams: { categoryId },
}: {
  searchParams: { categoryId?: string };
}) {
  return (
    <div className="flex max-w-[92%] flex-1 justify-center">
      <Suspense fallback={<LoadingProperties />}>
        {/* @ts-expect-error Server Component */}
        <Properties categoryId={categoryId} />
      </Suspense>
    </div>
  );
}
