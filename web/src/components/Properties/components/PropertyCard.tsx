import React from "react";
import { type Property } from "@/types";
import Image from "next/image";

export default function PropertyCard(property: Property) {
  return (
    <div className="flex w-52 flex-col">
      <Image
        className="rounded-lg"
        src={property.image}
        alt="Picture of the author"
        width={208}
        height={208}
      />
      <div>
        <div> {property.title} </div>
        <div> {property.rating} </div>
      </div>
    </div>
  );
}
