import { type Listing } from "@/types";
import React from "react";

interface ReservationWidgetProps {
  listing: Listing;
}

export default function ReservationWidget({
  listing: { info },
}: ReservationWidgetProps) {
  return (
    <div className=" stick min-h-48 flex max-h-96 w-2/5 rounded-xl border p-4 shadow-lg">
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
