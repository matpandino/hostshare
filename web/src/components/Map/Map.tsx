"use client";
import GlMap, { type MapProps } from "react-map-gl";

export default function Map(props?: MapProps) {
  return (
    <div className="flex w-full items-center bg-gray-200">
      <GlMap
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/light-v8"
        {...props}
      >
        {props?.children}
      </GlMap>
    </div>
  );
}
