import {
  debounce, delay, put, select, call,
} from 'redux-saga/effects';

import * as actions from './actions';
import * as storeActions from '../actions';
import BundlerService from '../../bundlerService';
import { selectors } from '../../../project';

export function* watchRequestBuild() {
  yield debounce(1000, actions.types.ReqBuild, build);
}

export function* build(action : ReturnType<typeof actions.requestBuild>) {
  const state = yield select();
  const files = selectors.files(state);
  const entryPoint = files[0].name;

  console.log(`Starting build for projectId ${action.payload.projectId} with ${files.length} files`);
  console.log(`Entry point is ${entryPoint}`);
  yield put(storeActions.beginBuild());

  try {
    const transpiledFiles = [];
    for (let i = 0; i < files.length; i++) {
      try {
        const transpiled = BundlerService.transpile(files[i]);
        transpiledFiles.push(transpiled);
      } catch (e) {
        console.error(`Transpilation error in file ${files[i].name}`);
        console.error(e);
        throw e;
      }
    }

    const bundle : string = yield call(BundlerService.bundle, transpiledFiles, files[0].name);

    console.log('Build done');
    console.log({ bundle });
    yield put(storeActions.finishBuild(bundle));
  } catch (e) {
    console.error('Build error!', e);
    yield put(storeActions.finishBuildError(e));
  }

  yield delay(200);
}
