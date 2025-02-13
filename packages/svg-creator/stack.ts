import type { Color, Empty } from "@snk/types/grid";
import { createAnimation } from "./css-utils";
import { h } from "./xml-utils";

export type Options = {
  sizeDot: number;
};

export const createStack = (
  cells: { t: number | null; color: Color | Empty }[],
  { sizeDot }: Options,
  width: number,
  y: number,
  duration: number
) => {
  const styles = [
    `.u{ 
      transform-origin: 0 0;
      transform: scale(0,1);
      animation: none linear ${duration}ms infinite;
    }`,
  ];

  return { svgElements: [], styles };
};
