import { SketchStoreState } from "./sketchStoreState";
import { Sketch } from "../../repository/sketch";

export function currentSketch(state: SketchStoreState) : Sketch {
  return state.sketches.find((s) => s.id === state.selectedSketchId) || null
};
