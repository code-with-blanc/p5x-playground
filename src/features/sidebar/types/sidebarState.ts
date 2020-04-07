import { Sketch } from "./sketch";

export interface SidebarState {
  sketches: Sketch[];
  selectedSketchId: number | null;
};
