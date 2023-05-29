import Map from "@/components/Map/Map";
import PriceMarker from "@/components/Map/PriceMarker";
import { Properties } from "@/components/Properties";
import { type Listing } from "@/types";

interface SearchPageProps {
  searchParams: { location?: string };
}

export default async function Page({
  searchParams: { location },
}: SearchPageProps) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const url = new URL(`${process.env.NEXT_PUBLIC_API}/data`);
  const params = new URLSearchParams(url.search);

  location && params.set("info.location.city_like", location);
  location && params.set("_limit", "32");

  const response = await fetch(`${url.href}?${params.toString()}`);

  const listings = (await response.json()) as Listing[];

  if (!listings) return null;

  return (
    <div className="relative flex max-w-full flex-1 justify-center px-5 md:px-0">
      <div className="flex w-full md:w-full md:px-5">
        <Properties listings={listings} />
      </div>
      <div className="sticky hidden md:top-[theme(height.header)] md:flex md:h-[calc(100vh-theme(height.header))] md:w-2/3">
        <Map
          initialViewState={{
            latitude: listings?.[0]?.info?.location?.lat,
            longitude: listings?.[0]?.info?.location?.long,
            zoom: 3,
          }}
          mapStyle="mapbox://styles/mapbox/light-v8"
        >
          {listings.map((listing) => (
            <PriceMarker
              href={`/property/${listing.info.id}`}
              contentPrice={
                <div className="rounded-3xl border border-gray-400 bg-white px-2 py-1 text-sm font-bold hover:border-gray-700 hover:bg-gray-100">
                  {listing.info.currency.symbol}
                  {listing.info.price}
                </div>
              }
              key={listing.info.id}
              latitude={listing.info.location.lat}
              longitude={listing.info.location.long}
            />
          ))}
        </Map>
      </div>
    </div>
  );
}
