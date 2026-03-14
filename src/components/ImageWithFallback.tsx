import React, { useState } from 'react';
import fallbackImage from '../assets/image-fallback.svg';

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement>;

const ImageWithFallback = ({ onError, src, alt, ...rest }: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    if (!hasError) {
      setHasError(true);
    }
    onError?.(event);
  };

  return (
    <img
      src={hasError ? fallbackImage : src}
      alt={alt}
      onError={handleError}
      {...rest}
    />
  );
};

export default ImageWithFallback;
