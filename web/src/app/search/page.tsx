import Map from "@/components/Map/Map";
import { Properties } from "@/components/Properties";

export default function Page() {
  return (
    <div className="relative flex max-w-full flex-1 justify-center">
      <div className="flex w-full md:w-full md:px-5">
        {/* @ts-expect-error Server Component */}
        <Properties />
      </div>
      <div className="sticky hidden md:top-[theme(height.header)] md:flex md:h-[calc(100vh-theme(height.header))] md:w-2/3">
        <Map />
      </div>
    </div>
  );
}
