import { Properties } from "@/components/Properties";

export const revalidate = 5 * 60; // Page will revalidate data every 5 minutes

export default function Page() {
  return (
    <div>
      <h1>Homes</h1>
      Cozy Studio Apartment
      {/* @ts-expect-error Server Component */}
      <Properties />
    </div>
  );
}
