import PropertyCard from "./components/PropertyCard";
import { type Property } from "@/types";

export async function Properties() {
  const response = await fetch("http://localhost:3003/properties", {
    // Cache per user
    cache: "no-store",
  });

  const properties = (await response.json()) as Property[];

  return (
    <div className="grid-container mt-5 w-full max-w-[92%] gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
}
