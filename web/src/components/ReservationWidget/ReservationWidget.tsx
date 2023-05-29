"use client";
import { type Listing } from "@/types";
import { format } from "date-fns";
import React, { useRef, useState } from "react";
import { type DateRange, DayPicker } from "react-day-picker";
import { useOnClickOutside } from "usehooks-ts";
import QuantitySelector from "../QuantitySelector";

interface ReservationWidgetProps {
  listing: Listing;
}

const today = new Date();

export default function ReservationWidget({
  listing: { info },
}: ReservationWidgetProps) {
  const ref = useRef(null);

  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };

  const [guestCount, setGuestCount] = useState(1);

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [selected, setSelected] = useState<DateRange | undefined>(
    defaultSelected
  );

  const handleClickOutside = () => setIsDatePickerOpen(false);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="border-1 sticky top-[theme(height.header)] flex h-fit w-1/2 flex-col gap-4 rounded-xl border p-5 shadow-lg lg:w-1/3">
      <div>
        <span className="text-2xl font-bold">
          {info.currency.symbol}
          {info.price}
        </span>{" "}
        night
      </div>

      <div className="relative">
        <div
          className="cursor-pointer rounded-lg border border-gray-300 p-2 hover:border-gray-400"
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
        >
          {!selected?.from && !selected?.to ? (
            <span className="text-base text-gray-500">Select a range</span>
          ) : null}
          {selected?.from ? (
            <span>
              From{" "}
              <span className="font-bold">
                {format(selected.from, "MMM d")}{" "}
              </span>
            </span>
          ) : null}
          {selected?.to ? (
            <span>
              to{" "}
              <span className="font-bold">{format(selected.to, "MMM d")} </span>{" "}
            </span>
          ) : null}
        </div>
        {isDatePickerOpen ? (
          <div
            ref={ref}
            className="absolute right-0 top-0 mt-12 rounded-xl border bg-white text-sm "
          >
            <DayPicker
              fromDate={today}
              initialFocus
              mode="range"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-2">
        <QuantitySelector
          value={guestCount}
          onChange={setGuestCount}
          min={1}
          max={Number.POSITIVE_INFINITY}
        />
        <span> guest{guestCount !== 1 ? "s" : ""}</span>
      </div>

      <div className="flex w-full items-center justify-center">
        <button className="w-full rounded bg-primary px-4 py-2 font-bold text-white">
          Reserve
        </button>
      </div>
    </div>
  );
}
