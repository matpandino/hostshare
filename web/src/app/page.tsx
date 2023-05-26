import { Properties } from "@/components/Properties";

export default function Page() {
  return (
    <div className="flex max-w-[92%] flex-1 justify-center">
      {/* @ts-expect-error Server Component */}
      <Properties />
    </div>
  );
}
