import { Sketch } from "./sketch";

export const ADD_SKETCH = 'sidebar/ADD_SKETCH';

export interface AddSketchAction {
  type: typeof ADD_SKETCH;
  payload: Sketch;
};

export type SidebarActionTypes = AddSketchAction;