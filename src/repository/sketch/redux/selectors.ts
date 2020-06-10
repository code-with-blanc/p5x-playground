import { SketchStoreState } from '../../types/sketchStoreState';
import { Sketch } from '..';

// eslint-disable-next-line import/prefer-default-export
export function activeSketch(state: SketchStoreState) : Sketch | null {
  const sketch = state.sketches.find((s) => s.id === state.activeSketchId) || null;
  return sketch;
}
