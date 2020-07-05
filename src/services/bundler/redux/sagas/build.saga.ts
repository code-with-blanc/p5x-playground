import { debounce, delay } from 'redux-saga/effects';

import * as actions from './actions';
import BundlerService from '../../bundlerService';
import { Project } from '../../../project/types';

export function* watchRequestBuild() {
  yield debounce(1000, actions.types.ReqBuild, build);
}

export function* build(action : ReturnType<typeof actions.requestBuild>) {
  const id = action.payload.projectId;
  BundlerService.compile(new Project(id, `Project ${id}`));
  yield delay(200);
}
