/* eslint-env jest */
import configureMockStore from 'redux-mock-store';

import * as Operations from './operations';
import * as Actions from './actions';

import reducer from './reducer';

const mockStore = configureMockStore();

describe('sketchStore operations', () => {
  it('should setActiveSketch', () => {
    const id = 1;

    const store = mockStore()

    Operations.setActiveSketch(store.dispatch)(id);

    expect(store.getActions()).toEqual([
      Actions.setActiveSketchId(id)
    ]);
  })
});
