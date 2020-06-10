import { Sketch } from '..';

// Types
export const SET_SKETCHES = 'sketches/SET_SKETCHES';
export const ADD_SKETCH = 'sketches/ADD_SKETCH';
export const REMOVE_SKETCH = 'sketches/REMOVE_SKETCH';
export const SET_ACTIVE = 'sketches/SET_ACTIVE';
export const PATCH_SKETCH = 'sketches/PATCH_SKETCH';
export const UPDATE_SKETCH = 'sketches/UPDATE_SKETCH';

export interface SketchAction<TPayload> {
  type: string;
  payload: TPayload;
}

export type PayloadTypes = number | Sketch | Sketch[] | Partial<Sketch>;

// / Action Creators
export const setSketches = (sketches: Sketch []) : SketchAction<Sketch[]> => ({
  type: SET_SKETCHES,
  payload: sketches,
});

export const addSketch = (newSketch: Sketch) : SketchAction<Sketch> => ({
  type: ADD_SKETCH,
  payload: newSketch,
});

export const removeSketch = (id: number) : SketchAction<number> => ({
  type: REMOVE_SKETCH,
  payload: id,
});

export const setActiveSketchId = (id: number) : SketchAction<number> => ({
  type: SET_ACTIVE,
  payload: id,
});

export const updateCode = (id: number, newCode: string) : SketchAction<any> => ({
  type: PATCH_SKETCH,
  payload: {
    id,
    code: newCode,
  },
});

export const patchSketch = (patch: Partial<Sketch>) : SketchAction<Partial<Sketch>> => ({
  type: UPDATE_SKETCH,
  payload: patch,
});
