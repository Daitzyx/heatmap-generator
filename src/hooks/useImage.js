import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { checkImageExists, deleteImage as deleteImageService } from '@/services/imageService';
import imageT from "@/assets/images/image.png";


export const useImage = () => {
  const [imagePath, setImagePath] = useState(imageT);
  const [imageExists, setImageExists] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const path = "/downloads/heatmap-image.png";
      const result = await checkImageExists(path);
      if (result.exists) {
        setImageExists(true);
        setImagePath(result.path);
      } else {
        setImageExists(false);
        setImagePath(imageT);
      }
      setLoading(false);
    };

    fetchImage();
  }, []);

  const deleteImage = useCallback(async () => {
    const result = await deleteImageService();
    if (result.success) {
      setImageExists(false);
      setImagePath(imageT);
      toast.success('Image deleted successfully!');
    } else {
      toast.error('Error deleting image');
    }
  }, []);

  return { imagePath, imageExists, loading, deleteImage };
};
