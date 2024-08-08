'use client';

import { createContext, useEffect, useContext, useState } from 'react';
import { originalWidthSize, originalHeightSize } from '@/constants/imageSize';

const ImageSizeContext = createContext();

export const ImageSizeProvider = ({ children }) => {
  const [widthSize, setWidthSize] = useState(originalWidthSize);
  const [heightSize, setHeightSize] = useState(originalHeightSize);

  const aspectRatio = originalWidthSize / originalHeightSize;

  const increaseSize = () => {
    setWidthSize(prev => Math.min(1104, prev + 100));
  };

  const decreaseSize = () => {
    setWidthSize(prev => Math.max(504, prev - 100));
  };

  useEffect(() => {
    setHeightSize(widthSize / aspectRatio);
  }, [widthSize]);

  return (
    <ImageSizeContext.Provider value={{ widthSize: parseInt(widthSize), heightSize: parseInt(heightSize), increaseSize, decreaseSize }}>
      {children}
    </ImageSizeContext.Provider>
  );
};

export const useImageSize = () => {
  return useContext(ImageSizeContext);
};
