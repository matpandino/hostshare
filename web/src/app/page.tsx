import { Properties } from "@/components/Properties";

export const revalidate = 5 * 60; // Page will revalidate data every 5 minutes

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      {/* @ts-expect-error Server Component */}
      <Properties />
    </div>
  );
}
