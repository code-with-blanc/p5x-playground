import {
  debounce, put, select, call,
} from 'redux-saga/effects';

import * as console from '../../../console';
import * as project from '../../../project';

import BundlerService from '../../bundlerService';
import * as sagaActions from './actions';
import * as storeActions from '../actions';

// eslint-disable-next-line no-undef
const browserConsole = window?.console;

export function* watchRequestBuild() {
  yield debounce(1000, sagaActions.types.ReqBuild, build);
}

export function* build() {
  yield put(console.actions.clear());
  yield put(console.actions.info('Starting Build...'));
  
  try {
    const state = yield select();
    const files = project.selectors.files(state);
    const entryPoint = files[0].name;

    yield put(console.actions.info(`Entry point is ${entryPoint}`));
    yield put(storeActions.beginBuild());

    try {
      const transpiledFiles = [];
      for (let i = 0; i < files.length; i++) {
        try {
          const transpiled = BundlerService.transpile(files[i]);
          transpiledFiles.push(transpiled);
        } catch (e) {
          yield put(console.actions.error(`Transpilation error in file ${files[i].name}`));
          yield put(console.actions.error(e));
          yield put(console.actions.error(e.message));

          throw e;
        }
      }

      let bundle = '';
      try {
        bundle = yield call(BundlerService.bundle, transpiledFiles, files[0].name);
      } catch (e) {
        yield put(console.actions.error('Error at project bundling'));
        yield put(console.actions.error(e));
        yield put(console.actions.error(e.message));

        throw e;
      }

      yield put(console.actions.info('Build complete!'));
      browserConsole.log('Build complete!');
      browserConsole.log({ bundle });

      yield put(storeActions.finishBuild(bundle));
    } catch (e) {
      yield put(storeActions.finishBuildError(e));
      throw e;
    }
  } catch (e) {
    browserConsole.log({ errorObj: e });
    // browserConsole.error('Error in build saga', e);
  }
}
