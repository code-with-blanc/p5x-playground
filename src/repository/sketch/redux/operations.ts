import { Dispatch } from 'redux';
import * as Actions from './actions';

import Repository, { Sketch } from '..';

export const newSketch = (dispatch : Dispatch) => () => {
  const sketch = Repository.getNewSketch();
  dispatch(Actions.addSketch(sketch));
};

export const removeSketch = (dispatch: Dispatch) => (id: number) => {
  dispatch(Actions.removeSketch(id));
};

export const updateCode = (dispatch: Dispatch) => (id: number, code: string) => {
  dispatch(Actions.updateCode(id, code));
};

export const patchSketch = (dispatch: Dispatch) => (id: number, patch: Partial<Sketch>) => {
  dispatch(Actions.patchSketch({ id, ...patch }));
};

export const setActiveSketch = (dispatch: Dispatch) => (id: number) => {
  dispatch(Actions.setActiveSketchId(id));
};
