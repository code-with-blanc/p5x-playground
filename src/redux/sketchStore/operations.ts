import * as Actions from './actions';

import Repository from '../../repository/sketch';

export const getSketches = (dispatch: Function) => () => {
  const sketches = Repository.getAll();

  dispatch(Actions.setSketches(sketches));
}

export const newSketch = (dispatch : Function) => () => {
  Repository.create();
  const sketches = Repository.getAll()

  dispatch(Actions.setSketches(sketches));
};

export const setSelectedSketch = (dispatch: Function) => (id: number) => {
  dispatch(Actions.setSelectedSketchId(id));
}
