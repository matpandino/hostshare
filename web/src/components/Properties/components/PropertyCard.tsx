import React from "react";
import { type Property } from "@/types";
import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function PropertyCard(property: Property) {
  return (
    <div className="flex aspect-square flex-col gap-1">
      <div className="relative h-full w-full">
        <Image
          className="rounded-xl"
          src={property.image}
          alt={`${property.title} image`}
          fill
        />
      </div>
      <div>
        <div className="flex flex-row justify-between font-semibold">
          <div>{property.location}</div>
          <div className="flex items-center gap-1">
            <StarFilledIcon /> {property.rating}
          </div>
        </div>
        <div className="flex flex-col break-words text-neutral-600">
          {property.categories.join(" | ")}
        </div>
        <div className="flex flex-row justify-between font-bold">
          <div>
            ${property.price} <span className="font-medium">night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
