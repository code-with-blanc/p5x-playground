import * as Actions from './actions';

import Repository from '..';

export const getSketches = (dispatch: Function) => () => {
  const sketches = Repository.getAll();

  dispatch(Actions.setSketches(sketches));
}

export const newSketch = (dispatch : Function) => () => {
  Repository.create();
  const sketches = Repository.getAll()

  dispatch(Actions.setSketches(sketches));
};

export const setActiveSketch = (dispatch: Function) => (id: number) => {
  dispatch(Actions.setActiveSketchId(id));
}
