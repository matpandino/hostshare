import Map from "@/components/Map/Map";
import Marker from "@/components/Map/Marker";
import AmenitiesSection from "@/components/Property/components/AmenitiesSection";
import PropertyContentHeader from "@/components/Property/components/PropertyContentHeader";
import ReservationWidget from "@/components/ReservationWidget/ReservationWidget";
import { type Listing } from "@/types";
import Image from "next/image";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `http://localhost:3003/data?info.id=${id}&_limit=1`
  );

  const listings = (await response.json()) as Listing[];
  const propertyData = listings[0];

  if (!propertyData) return <div>nothing</div>;

  const { info } = propertyData;

  return (
    <div className="flex h-full w-full max-w-[92%] flex-col gap-4 p-4">
      <PropertyContentHeader listing={propertyData} />
      <div className="h-96 w-full bg-red-300"></div>
      {/* main description */}
      <div className="flex gap-6">
        <div className="flex w-3/5 flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">
                Hosted by {info.host.name}
              </h2>
              <ol className="flex gap-1 text-sm">
                {info.details.data.map((detail, index) => (
                  <li key={detail.type}>
                    {index !== 0 && <>&bull;</>} {detail.value} {detail.type}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex">
              <Image
                className="rounded-full bg-gray-100 object-cover"
                src={info.host.avatar.url}
                loading="eager"
                alt="host profile picture"
                width="48"
                height="48"
              />
            </div>
          </div>
          <div>
            <hr className="w-full" />
          </div>
          <p>{info.description}</p>
          <div>
            <hr className="w-full" />
          </div>

          <AmenitiesSection listing={propertyData} />
        </div>

        <ReservationWidget listing={propertyData} />
      </div>
      <div className="flex h-96 w-full ">
        <Map
          initialViewState={{
            longitude: info.location.long,
            latitude: info.location.lat,
            zoom: 14,
          }}
        >
          <Marker latitude={info.location.lat} longitude={info.location.long} />
        </Map>
      </div>
    </div>
  );
}
