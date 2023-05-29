"use client";
import { FaMapMarker } from "react-icons/fa";
import { type MarkerProps, Marker as GlMarker } from "react-map-gl";

export default function Marker(props: MarkerProps) {
  return (
    <GlMarker {...props}>
      <FaMapMarker className="text-xl text-primary" />
    </GlMarker>
  );
}
