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

  if (!propertyData) return <div className="mt-10">Property not found</div>;

  const { info } = propertyData;

  return (
    <div className="flex h-full w-full max-w-[92%] flex-col gap-8 py-5 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <PropertyContentHeader listing={propertyData} />
      <div className="flex h-80 w-full gap-2 sm:h-80 md:h-[560px]">
        <div className="h-full w-full md:w-1/2 ">
          <div className="relative h-full w-full">
            <Image
              className="rounded-xl bg-gray-100 object-cover"
              src={info.mainImage.url}
              loading="eager"
              alt={`image`}
              fill
            />
          </div>
        </div>
        <div className="hidden md:grid md:w-1/2 md:grid-cols-2 md:gap-2 ">
          {info.images.data.slice(1, 5).map((image) => (
            <div className="flex flex-col" key={image.url}>
              <div className="relative h-full w-full">
                <Image
                  className="rounded-xl bg-gray-100 object-cover"
                  src={image.url}
                  loading="eager"
                  alt={`image`}
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* main description */}
      <div className="flex gap-10">
        <div className="flex w-3/5 flex-col gap-8">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">
                Hosted by {info.host?.name}
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
                src={info.host?.avatar?.url}
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
      <div>
        <hr className="w-full" />
      </div>

      <div className="flex w-full flex-col gap-3">
        <h2 className="text-xl font-semibold">Where you’ll be</h2>
        <div className="flex h-96">
          <Map
            initialViewState={{
              longitude: info.location.long,
              latitude: info.location.lat,
              zoom: 14,
            }}
          >
            <Marker
              latitude={info.location.lat}
              longitude={info.location.long}
            />
          </Map>
        </div>

        <h3 className="text-lg font-bold">
          {info.location.address ? `${info.location.address}, ` : null}
          {info.location.city ? `${info.location.city}, ` : null}
          {info.location.country.title}
        </h3>
      </div>
    </div>
  );
}
