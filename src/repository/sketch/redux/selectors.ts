import { SketchStoreState } from "./sketchStoreState";
import { Sketch } from "..";

export function activeSketch(state: SketchStoreState) : Sketch | null {
  return state.sketches.find((s) => s.id === state.activeSketchId) || null
};
