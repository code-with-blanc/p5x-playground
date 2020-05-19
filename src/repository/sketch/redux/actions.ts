import { Sketch } from "..";

// Types
export const SET_SKETCHES = 'sketches/SET_SKETCHES';
export const ADD_SKETCH = 'sketches/ADD_SKETCH';
export const REMOVE_SKETCH = 'sketches/REMOVE_SKETCH';
export const SET_ACTIVE = 'sketches/SET_ACTIVE';

export interface AddSketchAction {
  type: typeof ADD_SKETCH;
  payload: Sketch;
};

export interface RemoveSketchAction {
  type: typeof REMOVE_SKETCH;
  payload: number;
}

export interface SetActiveSketchIdAction {
  type: typeof SET_ACTIVE;
  payload: number;
}

export interface SetSketchesAction {
  type: typeof SET_SKETCHES;
  payload: Sketch[];
}


export type SketchActionTypes = 
  AddSketchAction | RemoveSketchAction | SetActiveSketchIdAction | SetSketchesAction;


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

export const setActiveSketchId = (id: number) : SetActiveSketchIdAction => {
  return {
    type: SET_ACTIVE,
    payload: id,
  }
}
