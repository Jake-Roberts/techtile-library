"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type Review = {
  name: string;
  review: string;
  photo: StaticImageData;
};

const rand = (max: number, min: number, prc: number = 2): number =>
  +(min + (max - min) * Math.random()).toFixed(prc);

export default function CardCarousel({
  reviews,
}: {
  reviews: Record<string, Review>;
}) {
  const entries = Object.entries(reviews);
  const n = entries.length;
  const m = 15; // max rotation angle

  return (
    <div
      id='people-carousel'
      style={{ ["--n" as any]: n, ["--k" as any]: 0 } as React.CSSProperties}
    >
      {entries.map(([label, data], i) => (
        <article
          key={label}
          style={
            {
              ["--i" as any]: i,
              ["--a" as any]: `${rand(m, -m)}deg`,
            } as React.CSSProperties
          }
        >
          <h2>{label}</h2>
          <em>{data.name}</em>
          <Image src={data.photo} alt={`reviewer ${i}`} />
        </article>
      ))}
      <div>
        <button aria-label='previous' data-inc='-1'>
          <ChevronLeft />
        </button>
        <button aria-label='next' data-inc='1'>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
