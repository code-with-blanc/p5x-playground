/* eslint-env jest */
import reducer from './reducer';
import * as actions from './actions';
import BundlerState from './bundlerState';

describe('Bundler reducer', () => {
  it('begin build', () => {
    const initialState : BundlerState = {
      isBuilding: false,
      bundle: null,
    };
    
    const result = reducer(
      initialState,
      actions.beginBuild(),
    );

    expect(result.isBuilding).toEqual(true);
  });

  it('finish build', () => {
    const initialState : BundlerState = {
      isBuilding: true,
      bundle: null,
    };
    const bundle = 'my bundle yay!';

    const result = reducer(
      initialState,
      actions.finishBuild(bundle),
    );

    expect(result.isBuilding).toEqual(false);
    expect(result.bundle).toEqual(bundle);
  });
});
