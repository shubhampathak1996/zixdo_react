import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

export default ({ src, ...props }) => {
  const [imgSrc, setSrc] = useState('/assets/images/default-image.png' || src);
  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener('load', onLoad);
    return () => {
      img.removeEventListener('load', onLoad);
      setSrc('/assets/images/default-image.png');
    };
  }, [src, onLoad]);
  return <img {...props} alt={imgSrc} src={imgSrc} />;
};
