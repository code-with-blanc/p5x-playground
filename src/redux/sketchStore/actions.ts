import { Sketch } from "../../repository/sketch";

// Types
export const ADD_SKETCH = 'sidebar/ADD_SKETCH';
export const REMOVE_SKETCH = 'sidebar/REMOVE_SKETCH';
export const SET_SELECTED = 'sidebar/SET_SELECTED';

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

export type SidebarActionTypes = AddSketchAction | RemoveSketchAction | SetSelectedSketchIdAction;

// Action Creators
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
