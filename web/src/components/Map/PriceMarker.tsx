"use client";
import Link from "next/link";
import { type ReactNode } from "react";
import { type MarkerProps, Marker as GlMarker } from "react-map-gl";

interface PriceMarkerProps extends MarkerProps {
  contentPrice: ReactNode;
  href: string;
}

export default function PriceMarker(props: PriceMarkerProps) {
  return (
    <GlMarker {...props}>
      <Link href={props.href} prefetch={false}>
        {props.contentPrice}
      </Link>
    </GlMarker>
  );
}
