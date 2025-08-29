import React from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  alt?: string;
  height?: string; // e.g., "75vh"
  children?: React.ReactNode;
}

export default function ParallaxSection({
  backgroundImage,
  alt = '',
  height = '75vh',
  children,
}: ParallaxSectionProps) {
  return (
    <section
      className="w-full bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height,
      }}
      aria-label={alt}
    >
      <div className="z-10 text-white text-center px-4">{children}</div>
    </section>
  );
}
