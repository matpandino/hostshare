import PropertyCard from "./components/PropertyCard";
import { type Listing } from "@/types";

interface PropertiesProps {
  listings?: Listing[];
}

export function Properties({ listings }: PropertiesProps) {
  return (
    <div className="grid-container mt-5 w-full gap-6">
      {listings?.map((listing) => (
        <PropertyCard key={listing.info.id} listing={listing} />
      ))}
    </div>
  );
}
