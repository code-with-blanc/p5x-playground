import { SketchStoreState } from "./sketchStoreState";
import { Sketch } from "..";

export function activeSketch(state: SketchStoreState) : Sketch | null {
  const sketch = state.sketches.find((s) => s.id === state.activeSketchId) || null;
  return sketch;
};
