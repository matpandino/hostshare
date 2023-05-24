import { Properties } from "@/components/Properties";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      {/* @ts-expect-error Server Component */}
      <Properties />
    </div>
  );
}
