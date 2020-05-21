import * as Actions from './actions';

import Repository from '..';

export const getSketches = (dispatch: Function) => () => {
  const sketches = Repository.getAll();

  dispatch(Actions.setSketches(sketches));
}

export const newSketch = (dispatch : Function) => () => {
  throw new Error("repository cant create sketch yet");
  // dispatch(Actions.setSketches(sketches));
};

export const updateCode = (dispatch: Function) => (id: number, code: string) => {
  dispatch(Actions.updateCode(id, code))
};

export const setActiveSketch = (dispatch: Function) => (id: number) => {
  dispatch(Actions.setActiveSketchId(id));
};
