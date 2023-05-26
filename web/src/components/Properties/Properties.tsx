import PropertyCard from "./components/PropertyCard";
import { type Listing } from "@/types";

export async function Properties() {
  const response = await fetch("http://localhost:3003/data?_page=1&_limit=32", {
    // Cache per user
    cache: "no-store",
  });

  const listings = (await response.json()) as Listing[];

  return (
    <div className="grid-container mt-5 w-full gap-6">
      {listings.map((listing) => (
        <PropertyCard key={listing.info.id} listing={listing} />
      ))}
    </div>
  );
}
