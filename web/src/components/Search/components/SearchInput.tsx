"use client";

import Link from "next/link";
import { type ChangeEvent, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { type DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useOnClickOutside } from "usehooks-ts";
import QuantitySelector from "@/components/QuantitySelector";
import { useSearchParams } from "next/navigation";

const today = new Date();

const defaultSelected: DateRange = {
  from: undefined,
  to: undefined,
};

export default function SearchInput() {
  const ref = useRef(null);
  const searchParams = useSearchParams();

  const defaultGuestCount = Number(searchParams.get("guestCount") || 1);
  const defaultLocationSearch = searchParams.get("location") || undefined;

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState<string | undefined>(
    defaultLocationSearch
  );

  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(
    defaultSelected
  );
  const [guestCount, setGuestCount] = useState(defaultGuestCount);

  const handleClickOutside = () => setIsDatePickerOpen(false);

  const handleLocationSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationSearch(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="relative flex items-center justify-center gap-5 rounded-3xl border border-gray-200 bg-white py-2 pe-2 ps-4 text-sm shadow-md ">
      <input
        className="max-w-[110px] placeholder:text-gray-500 focus:outline-none"
        onChange={handleLocationSearchChange}
        value={locationSearch}
        placeholder="Search anywhere"
      />

      <div
        className="cursor-pointer"
        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
      >
        {!selectedRange?.from && !selectedRange?.to ? (
          <span className="text-gray-500">Select a range</span>
        ) : null}
        {selectedRange?.from ? (
          <span>
            From{" "}
            <span className="font-bold">
              {format(selectedRange.from, "MMM d")}{" "}
            </span>
          </span>
        ) : null}
        {selectedRange?.to ? (
          <span>
            to{" "}
            <span className="font-bold">
              {format(selectedRange.to, "MMM d")}
            </span>
          </span>
        ) : null}
      </div>
      {isDatePickerOpen ? (
        <div
          ref={ref}
          className="absolute top-0 mt-14 rounded-xl border bg-white "
        >
          <DayPicker
            fromDate={today}
            initialFocus
            mode="range"
            selected={selectedRange}
            onSelect={setSelectedRange}
          />
        </div>
      ) : null}

      <div className="flex items-center gap-1">
        <QuantitySelector
          value={guestCount}
          onChange={setGuestCount}
          min={1}
          max={Number.POSITIVE_INFINITY}
        />
        <span className="w-10"> guest{guestCount !== 1 ? "s" : ""}</span>
      </div>

      <Link
        href={{
          pathname: "/search",
          query: {
            location: locationSearch,
            guestCount,
          },
        }}
        prefetch={false}
        className="flex aspect-square h-8 items-center justify-center rounded-full bg-primary text-white"
      >
        <FaSearch />
      </Link>
    </div>
  );
}
