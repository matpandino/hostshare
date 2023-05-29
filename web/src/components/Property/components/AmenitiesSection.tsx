import { type Listing } from "@/types";
import React from "react";

interface AmenitiesSectionProps {
  listing: Listing;
}

export default function AmenitiesSection({
  listing: { info },
}: AmenitiesSectionProps) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Amenities</h2>
      <ul className=" grid grid-cols-2">
        {info.amenities.data
          .filter((amenity) => amenity.available)
          .map((amenity) => (
            <li key={amenity.type}>{amenity.title}</li>
          ))}
      </ul>
    </div>
  );
}
