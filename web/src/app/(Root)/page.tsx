import { Properties } from "@/components/Properties";
import { type Listing } from "@/types";

export default async function Page({
  searchParams: { categoryId },
}: {
  searchParams: { categoryId?: string };
}) {
  const response = await fetch(
    `http://localhost:3003/data?${
      categoryId ? `category=${categoryId}&` : ""
    }&_limit=32`,
    {
      // Cache per user
      cache: "no-store",
    }
  );

  const listings = (await response.json()) as Listing[];

  return (
    <div className="flex max-w-[92%] flex-1 justify-center">
      <Properties listings={listings} />
    </div>
  );
}
