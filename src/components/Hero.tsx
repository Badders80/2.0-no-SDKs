// src/components/Hero.tsx  (keep the image full-bleed, align inner content with the same container)
import * as React from "react";
import heroBg from "../assets/Horse-Double-Black.png";
import evolutionText from "../assets/Copy of Evolution Brand Kit (11 x 4 in).png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[92vh] min-h-[560px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <img
          src={evolutionText}
          alt="Evolution Stables"
          className="w-[520px] max-w-full"
        />
      </div>
    </section>
  );
}
