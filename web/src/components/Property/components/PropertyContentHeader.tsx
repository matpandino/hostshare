import { type Listing } from "@/types";
import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

interface PropertyContentHeaderProps {
  listing: Listing;
}

export default function PropertyContentHeader({
  listing: { info },
}: PropertyContentHeaderProps) {
  return (
    <div className="flex-col gap-2">
      <div className="flex w-full justify-start">
        <h1 className="text-2xl font-semibold">{info.title}</h1>
      </div>
      <div className="flex w-full justify-between text-sm">
        <div className="flex gap-2">
          <div className="flex gap-1">
            {<StarFilledIcon />} {info.ratings.value}
          </div>
          &bull;
          {info.host.isSuperhost ? (
            <>
              <div className="flex">Superhost</div>&bull;
            </>
          ) : null}
          <div className="flex">
            {info.location.address ? `${info.location.address}, ` : null}
            {info.location.city ? `${info.location.city}, ` : null}
            {info.location.country.title}
          </div>
        </div>
      </div>
    </div>
  );
}
