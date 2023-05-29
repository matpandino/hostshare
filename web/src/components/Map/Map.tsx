"use client";
import GlMap from "react-map-gl";

export default function Map() {
  return (
    <div className="flex w-full flex-col items-center bg-gray-200">
      <GlMap
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}
