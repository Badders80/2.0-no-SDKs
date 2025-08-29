import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError && !fallbackSrc) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 ${className}`}>
        <ImageIcon className="h-8 w-8 text-gray-400" />
      </div>
    );
  }

  return (
    <>
      {isLoading && <div className={`animate-pulse bg-gray-200 ${className}`} />}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
};

export default ImageWithFallback;
