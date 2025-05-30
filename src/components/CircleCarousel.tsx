"use client";

import React from "react";

const modelData = Array.from({ length: 6 }).map((_) => ({
  name: "Gretel-ACTGAN",
  description:
    "Model for generating highly dimensional, mostly numeric, tabular data",
  link: "#",
}));

export default function CircleCarousel() {
  return (
    <div className='void' id='void'>
      <div className='crop'>
        <ul id='card-list' style={{ ["--count" as any]: modelData.length }}>
          {modelData.map((model, idx) => (
            <li key={idx}>
              <div className='card'>
                <a href={model.link}>
                  <span className='model-name'>{model.name}</span>
                  <span>{model.description}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className='last-circle'></div>
        <div className='second-circle'></div>
      </div>
      <div className='mask'></div>
      <div className='center-circle'></div>
    </div>
  );
}
