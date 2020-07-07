import { debounce, delay, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as storeActions from '../actions';
import BundlerService from '../../bundlerService';

export function* watchRequestBuild() {
  yield debounce(1000, actions.types.ReqBuild, build);
}

export function* build(action : ReturnType<typeof actions.requestBuild>) {
  // const id = action.payload.projectId;

  yield put(storeActions.beginBuild());

  try {
    const bundle = BundlerService.build();
    yield delay(1000);    // pretend build takes time

    yield put(storeActions.finishBuild(bundle));
  } catch (e) {
    console.error('Build error!', e);
  }

  yield delay(200);
}
