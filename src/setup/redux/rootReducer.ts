import { combineReducers } from 'redux';

import sourceFileReducer from '../../services/project/redux/reducer';
import bundlerReducer from '../../services/bundler/redux/reducer';

import type ProjectState from '../../services/project/redux/projectState';
import type BundlerState from '../../services/bundler/redux/bundlerState';

export default combineReducers({
  sourceFileStore: sourceFileReducer,
  bundler: bundlerReducer,
});

export type RootState = {
  sourceFileStore: ProjectState;
  bundler: BundlerState;
};
