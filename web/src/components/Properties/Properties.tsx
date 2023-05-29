import PropertyCard from "./components/PropertyCard";
import { type Category, type Listing } from "@/types";
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const response = await fetch(
    "http://localhost:3003/categories?_page=1&_limit=12"
  );

  const categories = (await response.json()) as Category[];

  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

export async function Properties({ categoryId }: { categoryId: string }) {
  const response = await fetch(
    `http://localhost:3003/data?${
      categoryId ? `category=${categoryId}&` : ""
    }&_limit=32`,
    {
      // Cache per user
      cache: "no-store",
    }
  );

  console.log("xxxxxxxxxxxxxxx categoryId", categoryId);
  const listings = (await response.json()) as Listing[];

  return (
    <div className="grid-container mt-5 w-full gap-6">
      {listings.map((listing) => (
        <PropertyCard key={listing.info.id} listing={listing} />
      ))}
    </div>
  );
}
