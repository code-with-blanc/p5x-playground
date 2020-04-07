import { Sketch } from "../types/sketch";
import { SidebarActionTypes, ADD_SKETCH } from "../types/sidebarActions";

export const addSketch = (newSketch: Sketch) : SidebarActionTypes => {
  return {
    type: ADD_SKETCH,
    payload: newSketch,
  };
};
