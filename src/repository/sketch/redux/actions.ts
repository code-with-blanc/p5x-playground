import { Sketch } from "..";

// Types
export const SET_SKETCHES = 'sketches/SET_SKETCHES';
export const ADD_SKETCH = 'sketches/ADD_SKETCH';
export const REMOVE_SKETCH = 'sketches/REMOVE_SKETCH';
export const SET_ACTIVE = 'sketches/SET_ACTIVE';
export const PATCH_SKETCH = 'sketches/PATCH_SKETCH'
export const UPDATE_SKETCH = 'sketches/UPDATE_SKETCH';

export interface SketchAction<TPayload> {
  type: string;
  payload: TPayload;
}

/// Action Creators
export const setSketches = (sketches: Sketch []) : SketchAction<Sketch[]> => {
  return {
    type: SET_SKETCHES,
    payload: sketches,
  }
}

export const addSketch = (newSketch: Sketch) : SketchAction<Sketch> => {
  return {
    type: ADD_SKETCH,
    payload: newSketch,
  };
}

export const removeSketch = (id: number) : SketchAction<number> => {
  return {
    type: REMOVE_SKETCH,
    payload: id,
  }
}

export const updateSketch = (sketch: Sketch) : SketchAction<Sketch> => {
  return {
    type: UPDATE_SKETCH,
    payload: sketch,
  }
}

export const setActiveSketchId = (id: number) : SketchAction<number> => {
  return {
    type: SET_ACTIVE,
    payload: id,
  }
}

export const updateCode = (id: number, newCode: string) : SketchAction<any> => {
  return {
    type: PATCH_SKETCH,
    payload: {
      id,
      code: newCode,
    },
  }
}
