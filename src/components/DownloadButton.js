import { useState } from 'react';
import html2canvas from 'html2canvas';
import { Button, Loading } from './index';
import { saveImage } from '@/services/imageService';
import toast from 'react-hot-toast';


export const DownloadButton = ({ targetId, fileName, label }) => {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const downloadImage = async () => {
    if (hasDownloaded) {
      toast('You have already downloaded this image!',
        {
          icon: '⚠️',
        }
      );
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) {
      console.error('Capture area not found');
      return;
    }

    setIsLoading(true);
    try {
      const canvas = await html2canvas(element);
      const imageData = canvas.toDataURL('image/png');

      const result = await saveImage(imageData, fileName);

      if (result.success) {
        toast.success('Image saved successfully!')
        setHasDownloaded(true);
      }

      console.error('Error saving image:', result.message);
    } catch (error) {
      console.error('Error capturing image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={downloadImage} className="download-button h-min bg-cyan-500 disabled:bg-green-600" disabled={hasDownloaded}>
      {isLoading ? (
        <Loading />
      ) : (
        hasDownloaded ? 'Downloaded' : label
      )}
    </Button>
  );
};
