import { Properties } from "@/components/Properties";

export default function Page({
  searchParams: { categoryId },
}: {
  searchParams: { categoryId?: string };
}) {
  console.log("categoryId", categoryId);
  return (
    <div className="flex max-w-[92%] flex-1 justify-center">
      {/* @ts-expect-error Server Component */}
      <Properties categoryId={categoryId} />
    </div>
  );
}
