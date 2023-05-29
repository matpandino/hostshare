import { type Listing } from "@/types";
import React from "react";

interface ReservationWidgetProps {
  listing: Listing;
}

export default function ReservationWidget({
  listing: { info },
}: ReservationWidgetProps) {
  return (
    <div className=" border-1 sticky top-[theme(height.header)] flex h-96 w-1/3 rounded-xl bg-red-200 p-5">
      <div>
        <span className="text-2xl font-bold">
          {info.currency.symbol}
          {info.price}
        </span>
        night
      </div>
    </div>
  );
}
