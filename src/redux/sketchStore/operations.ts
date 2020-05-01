import * as Actions from './actions';

import { Sketch } from '../../repository/sketch';

let count = 0;

export const newSketch = (dispatch : Function) => () => {
  const templateSketch : Sketch = {
    id: count++,
    name: `New Sketch (${count})`,
  }

  dispatch(Actions.addSketch(templateSketch));
};

export const setSelectedSketch = (dispatch: Function) => (id: number) => {
  dispatch(Actions.setSelectedSketchId(id));
}
