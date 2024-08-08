'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { jsonUpload } from '@/utils/upload';
import { Button, DownloadButton, FileUpload, Heatmap } from '@/components';
import { useImageSize } from '@/contexts/ImageSizeContext';
import { useImage } from '@/hooks/useImage';

import { Tooltip } from '@geist-ui/core';

import plusIcon from "@/assets/icons/plus.svg";
import minusIcon from "@/assets/icons/minus.svg";
import resetIcon from "@/assets/icons/reset.svg";

const Home = () => {
  const [data, setData] = useState([]);
  const { imagePath, imageExists, loading, deleteImage } = useImage();
  const { widthSize, heightSize, increaseSize, decreaseSize } = useImageSize();

  const handleJsonUpload = useCallback((file, resetInput) => {
    jsonUpload(file, setData, resetInput);
  }, []);

  return (
    <div className="App min-h-screen w-full flex flex-col items-center bg-white">
      <h1 className='font-semibold text-lg p-1'>Heatmap Generator</h1>
      <div className='max-w-4xl w-full flex justify-between items-end p-2'>
        {!loading && !imageExists && (
          <FileUpload
            label="Upload JSON:"
            accept="application/json"
            onFileSelect={handleJsonUpload}
          />
        )}

        {imagePath && data.length > 0 && (
          <DownloadButton
            targetId="capture-area"
            fileName="heatmap-image.png"
            label="Download Image"
          />
        )}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div id="capture-area" className={`heatmap-container relative overflow-hidden w-[${widthSize}px] h-[${heightSize}px]`}>
          <Image src={imagePath} alt="Base Image for Heatmap" width={widthSize} height={heightSize} className='object-cover' />
          <Heatmap data={data} />
        </div>
      </div>
      <div className='flex justify-center gap-2 p-3'>
        <Button onClick={decreaseSize} className="px-4 py-2 bg-gray-300 rounded">
          <Image src={minusIcon} alt="Decrease Image Size" />
        </Button>

        <Button onClick={increaseSize} className="px-4 py-2 bg-gray-300 rounded">
          <Image src={plusIcon} alt="Increase Image Size" />
        </Button>

        {imageExists && (
          <Tooltip text="Delete the image from project and reset settings">
            <Button className='bg-red-500' onClick={deleteImage}>
              <Image src={resetIcon} alt="Reset All Settings" />
              Reset
            </Button>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Home;
