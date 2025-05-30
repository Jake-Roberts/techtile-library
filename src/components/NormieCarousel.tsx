"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  review: string;
  photo: StaticImageData;
};

export default function NormieCarousel({ reviews }: { reviews: Review[] }) {
  const [items, setItems] = useState(reviews);

  const prev = () => {
    const prevItems = () => {
      const copy = [...items];
      copy.unshift(copy.pop()!);
      return copy;
    };
    setItems(prevItems);
  };

  const next = () => {
    const nextItems = () => {
      const copy = [...items];
      setItems(copy);
      copy.push(copy.shift()!);
      return copy;
    };
    setItems(nextItems);
  };

  const handleItemClick = (e: MouseEvent, idx: number) => {
    if (idx !== 1) {
      e.preventDefault();
      e.stopPropagation();
      if (idx < 1) {
        prev();
      } else next();
    }
  };

  return (
    <div className='carousel'>
      <button className='previous' onClick={() => prev()}>
        <ChevronLeft />
      </button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <div
              onClick={(e) => handleItemClick(e as unknown as MouseEvent, idx)}
            >
              <Image
                src={item.photo}
                alt={`reviewer ${idx}`}
                width={200}
                height={200}
              />
              <label>{item.name}</label>
            </div>
          </li>
        ))}
      </ul>
      <button className='next' onClick={() => next()}>
        <ChevronRight />
      </button>
    </div>
  );
}
