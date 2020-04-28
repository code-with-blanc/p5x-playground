import * as Actions from './actions';

import { Sketch } from '../../../types/sketch';

export const newSketch = (dispatch : Function) => () => {
const templateSketch : Sketch = {
    id: 0,
    name: 'New Sketch',
  }

  dispatch(Actions.addSketch(templateSketch));
};
  