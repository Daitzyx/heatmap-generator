import useHeatmap from '@/hooks/useHeatmap';

export const Heatmap = ({ data }) => {
  const { canvasRef, widthSize, heightSize } = useHeatmap(data);

  return (
    <canvas
      ref={canvasRef}
      width={widthSize}
      height={heightSize}
      className="absolute top-0 left-0 overflow-hidden"
    ></canvas>
  );
};
