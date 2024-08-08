import { originalHeightSize, originalWidthSize } from "@/constants/imageSize";

export function calculateCentroid(xMin, yMin, xMax, yMax) {
  const centroidX = (parseFloat(xMin) + parseFloat(xMax)) / 2;
  const centroidY = (parseFloat(yMin) + parseFloat(yMax)) / 2;
  return { centroidX, centroidY };
}

export function parseDeepstream(deepstreamMsg) {
  return deepstreamMsg.map((msg) => {
    const [trakingId, xMin, yMin, xMax, yMax, object, region] = msg.split('|');

    return {
      trakingId,
      xMin: parseFloat(xMin),
      yMin: parseFloat(yMin),
      xMax: parseFloat(xMax),
      yMax: parseFloat(yMax),
      object,
      region,
    };
  });
}

export function createHeatmapInstance(container) {
  return {
    container,
    radius: 40,
    maxOpacity: 0.6,
    minOpacity: 0.3,
    blur: 0.75,
  }
}

export function resizeBoundingBox(boundingBox, newWidthSize, newHeightSize) {
  const trakingId = boundingBox.trakingId;
  const widthScale = newWidthSize / originalWidthSize;
  const heightScale = newHeightSize / originalHeightSize;

  const resizedBoundingBox = {
    xMin: boundingBox.xMin * widthScale,
    yMin: boundingBox.yMin * heightScale,
    xMax: boundingBox.xMax * widthScale,
    yMax: boundingBox.yMax * heightScale,
  };

  const { centroidX, centroidY } = calculateCentroid(
    resizedBoundingBox.xMin,
    resizedBoundingBox.yMin,
    resizedBoundingBox.xMax,
    resizedBoundingBox.yMax
  );

  return {
    trakingId,
    ...resizedBoundingBox,
    centroidX: parseInt(centroidX),
    centroidY: parseInt(centroidY),
  };
}
