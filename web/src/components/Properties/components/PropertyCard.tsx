import React from "react";
import { type Listing } from "@/types";
import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function PropertyCard({ listing }: { listing: Listing }) {
  const {
    mainImage,
    title,
    location: { city, country },
    ratings: { guestSatisfactionOverall },
    host,
    price,
  } = listing.info;

  return (
    <div className="flex aspect-square flex-col gap-1">
      <div className="relative h-full w-full">
        <Image
          className="rounded-xl"
          src={mainImage.url}
          alt={`${title} image`}
          fill
        />
      </div>
      <div>
        <div className="flex flex-row justify-between font-semibold">
          <div>
            {city}, {country.code}
          </div>
          <div className="flex items-center gap-1">
            <StarFilledIcon /> {guestSatisfactionOverall}
          </div>
        </div>
        {host?.name ? (
          <div className="mt-1 flex flex-row justify-between break-words text-neutral-600">
            <div>Stay with {host.name}</div>{" "}
            <div>
              <Image
                src={host.avatar.url}
                alt="host profile picture"
                width="30"
                height="30"
                className="rounded-full"
              />
            </div>
          </div>
        ) : (
          <div className="h-8" />
        )}
        <div className="flex flex-row justify-between font-bold">
          <div>
            ${price} <span className="font-medium">night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
