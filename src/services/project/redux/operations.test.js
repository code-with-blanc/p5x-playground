/* eslint-env jest */
import configureMockStore from 'redux-mock-store';

import * as Operations from './operations';
import * as Actions from './actions';

import reducer from './reducer';

const mockStore = configureMockStore();

describe('sourceFileStore operations', () => {
  it('should setActiveSourceFile', () => {
    const id = 1;

    const store = mockStore();

    Operations.setActiveSourceFile(store.dispatch)(id);

    expect(store.getActions()).toEqual([
      Actions.setActiveSourceFileId(id),
    ]);
  });
});
