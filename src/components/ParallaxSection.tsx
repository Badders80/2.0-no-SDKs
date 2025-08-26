import React from 'react';

type Props = {
  imageUrl: string;
  alt?: string;
  height?: string; // e.g., "80vh"
};

const ParallaxSection: React.FC<Props> = ({
  imageUrl,
  alt = 'Parallax background',
  height = '80vh',
}) => {
  return (
    <section
      className={`w-full bg-fixed bg-center bg-cover`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        height,
      }}
      aria-label={alt}
    />
  );
};

export default ParallaxSection;
