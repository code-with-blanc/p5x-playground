import { Sketch } from "../../repository/sketch";

export interface SketchStoreState {
  sketches: Sketch[];
  selectedSketchId: number | null;
};
