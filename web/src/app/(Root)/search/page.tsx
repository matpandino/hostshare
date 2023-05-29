import Map from "@/components/Map/Map";
import Marker from "@/components/Map/Marker";
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
            <Marker
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
