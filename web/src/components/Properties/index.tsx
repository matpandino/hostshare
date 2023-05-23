import PropertyCard from "./components/PropertyCard";
import { type Property } from "@/types";

export async function Properties() {
  const response = await fetch("http://localhost:3003/properties", {
    // Cache per user
    cache: "no-store",
  });

  const properties = (await response.json()) as Property[];

  return (
    <div>
      {properties?.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
}
