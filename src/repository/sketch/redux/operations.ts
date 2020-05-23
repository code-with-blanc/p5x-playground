import * as Actions from './actions';

import Repository, { Sketch } from '..';

export const newSketch = (dispatch : Function) => () => {
  const sketch = Repository.getNewSketch();
  dispatch(Actions.addSketch(sketch));
};

export const updateCode = (dispatch: Function) => (id: number, code: string) => {
  dispatch(Actions.updateCode(id, code));
};

export const updateSketch = (dispatch: Function) => (newSketch: Sketch) => {
  dispatch(Actions.updateSketch(newSketch));
}

export const setActiveSketch = (dispatch: Function) => (id: number) => {
  dispatch(Actions.setActiveSketchId(id));
};
