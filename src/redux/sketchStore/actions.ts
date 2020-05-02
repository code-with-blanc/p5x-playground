import { Sketch } from "../../repository/sketch";

// Types
export const SET_SKETCHES = 'sketches/SET_SKETCHES';
export const ADD_SKETCH = 'sketches/ADD_SKETCH';
export const REMOVE_SKETCH = 'sketches/REMOVE_SKETCH';
export const SET_SELECTED = 'sketches/SET_SELECTED';

export interface SetSketchesAction {
  type: typeof SET_SKETCHES;
  payload: Sketch[];
}

export interface AddSketchAction {
  type: typeof ADD_SKETCH;
  payload: Sketch;
};

export interface RemoveSketchAction {
  type: typeof REMOVE_SKETCH;
  payload: number;
}

export interface SetSelectedSketchIdAction {
  type: typeof SET_SELECTED;
  payload: number;
}

export type SidebarActionTypes = 
  AddSketchAction | RemoveSketchAction | SetSelectedSketchIdAction | SetSketchesAction;

/// Action Creators

export const setSketches = (sketches: Sketch []) : SetSketchesAction => {
  return {
    type: SET_SKETCHES,
    payload: sketches,
  }
}

export const addSketch = (newSketch: Sketch) : AddSketchAction => {
  return {
    type: ADD_SKETCH,
    payload: newSketch,
  };
};

export const removeSketch = (id: number) : RemoveSketchAction => {
  return {
    type: REMOVE_SKETCH,
    payload: id,
  }
}

export const setSelectedSketchId = (id: number) : SetSelectedSketchIdAction => {
  return {
    type: SET_SELECTED,
    payload: id,
  }
}
