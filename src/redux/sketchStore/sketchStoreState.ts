import { Sketch } from "../../types/sketch";

export interface SketchStoreState {
  sketches: Sketch[];
  selectedSketchId: number | null;
};
