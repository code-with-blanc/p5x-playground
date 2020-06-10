import { Sketch } from '../sketch';

export interface SketchStoreState {
  sketches: Sketch[];
  activeSketchId: number | null;
}
