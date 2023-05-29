"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { type DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useOnClickOutside } from "usehooks-ts";
import QuantitySelector from "@/components/QuantitySelector";

export default function SearchInput() {
  const ref = useRef(null);

  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [selected, setSelected] = useState<DateRange | undefined>(
    defaultSelected
  );
  const [guestCount, setGuestCount] = useState(0);

  const today = new Date();

  const handleClickOutside = () => setIsDatePickerOpen(false);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="relative flex items-center justify-center gap-5 rounded-3xl border border-gray-200 bg-white py-2 pe-2 ps-4 text-sm shadow-md ">
      <input
        className="max-w-[110px] placeholder:text-gray-500 focus:outline-none"
        placeholder="Search property..."
      />

      <div
        className="cursor-pointer"
        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
      >
        {!selected?.from && !selected?.to ? (
          <span className="text-gray-500">Select a range</span>
        ) : null}
        {selected?.from ? (
          <span>
            From{" "}
            <span className="font-bold">{format(selected.from, "MMM d")} </span>
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
          className="absolute top-0 mt-14 rounded-xl border bg-white "
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

      <div className="flex items-center gap-1">
        <QuantitySelector
          value={guestCount}
          onChange={setGuestCount}
          min={1}
          max={Number.POSITIVE_INFINITY}
        />
        <span> guest{guestCount === 1 ? "s" : ""}</span>
      </div>

      <Link
        href="/search"
        prefetch={false}
        className="flex aspect-square h-8 items-center justify-center rounded-full bg-primary text-white"
      >
        <FaSearch />
      </Link>
    </div>
  );
}
