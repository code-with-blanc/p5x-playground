import { Sketch } from "../../../types/sketch";

export interface SidebarState {
  sketches: Sketch[];
  selectedSketchId: number | null;
};
