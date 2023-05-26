import { type Listing } from "@/types";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `http://localhost:3003/data?info.id=${id}&_limit=1`,
    {
      // Cache per user
      cache: "no-store",
    }
  );

  const listings = (await response.json()) as Listing[];
  const propertyData = listings[0];

  if (!propertyData) return <div>nothing</div>;

  return <div>Page {JSON.stringify(propertyData.info.title)}</div>;
}
