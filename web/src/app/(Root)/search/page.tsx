import Map from "@/components/Map/Map";
import PriceMarker from "@/components/Map/PriceMarker";
import { Properties } from "@/components/Properties";
import { type Listing } from "@/types";

export default async function Page({ categoryId }: { categoryId: string }) {
  const response = await fetch(
    `http://localhost:3003/data?${
      categoryId ? `category=${categoryId}&` : ""
    }&_limit=32`,
    {
      // Cache per user
      cache: "no-store",
    }
  );

  const listings = (await response.json()) as Listing[];

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
        >
          {listings.map((listing) => (
            <PriceMarker
              href={`/property/${listing.info.id}`}
              contentPrice={
                <div className="rounded-xl border border-gray-700 bg-white px-1 text-sm hover:border-gray-400 hover:bg-gray-100">
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
