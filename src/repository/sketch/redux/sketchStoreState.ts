import { Sketch } from '..';

export interface SketchStoreState {
  sketches: Sketch[];
  activeSketchId: number | null;
}
