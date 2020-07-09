/* eslint-env jest */
import reducer from './reducer';
import * as actions from './actions';
import BundlerState from './bundlerState';

describe('Bundler reducer', () => {
  it('begin build', () => {
    const initialState : BundlerState = {
      isBuilding: false,
      buildError: null,
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
      buildError: null,
      bundle: null,
    };
    const bundle = 'my bundle yay!';

    const result = reducer(
      initialState,
      actions.finishBuild(bundle),
    );

    expect(result.isBuilding).toEqual(false);
    expect(result.buildError).toEqual(null);
    expect(result.bundle).toEqual(bundle);
  });


  it('finish build with error', () => {
    const initialState : BundlerState = {
      isBuilding: true,
      buildError: null,
      bundle: null,
    };
    const error = new Error('MyError');

    const result = reducer(
      initialState,
      actions.finishBuildError(error),
    );

    expect(result.isBuilding).toEqual(false);
    expect(result.buildError).toEqual(error);
    expect(result.bundle).toEqual(null);
  });
});
