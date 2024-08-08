import { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';
import { createHeatmapInstance, parseDeepstream, resizeBoundingBox } from '@/utils/helper';
import { useImageSize } from '@/contexts/ImageSizeContext';

const useHeatmap = (data) => {
  const { widthSize, heightSize } = useImageSize();
  const canvasRef = useRef(null);
  const heatmapRef = useRef(null);

  const processDataForHeatmap = (data, width, height) => {
    const points = [];

    data.forEach(item => {
      const deepstreamMsg = item.fields['deepstream-msg'];
      const parsedData = parseDeepstream(deepstreamMsg);

      parsedData.forEach((item) => {
        const { centroidX, centroidY } = resizeBoundingBox(item, width, height);
        points.push({
          x: centroidX,
          y: centroidY,
          value: 1
        });
      });
    });

    return points;
  };

  const updateHeatmap = () => {
    if (!canvasRef.current || data.length === 0) return;

    if (!heatmapRef.current) {
      heatmapRef.current = h337.create(createHeatmapInstance(canvasRef.current.parentElement));
    } else {
      heatmapRef.current._renderer.setDimensions(widthSize, heightSize);
    }

    const points = processDataForHeatmap(data, widthSize, heightSize);

    heatmapRef.current.setData({
      max: 10,
      data: points
    });
  };

  useEffect(() => {
    updateHeatmap();
  }, [data, widthSize, heightSize]);

  return { canvasRef, widthSize, heightSize };
};

export default useHeatmap;
