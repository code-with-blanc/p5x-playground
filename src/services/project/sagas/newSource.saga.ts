import {
  call, take, select, put,
} from 'redux-saga/effects';

import type { SagaActionType } from './actions';

import * as storeActions from '../redux/actions';
import * as selectors from '../redux/selectors';
import ProjectService from '../projectService';

export function* watchNewSource() {
  while (true) {
    yield take('project/sagas/NEW_SOURCE' as SagaActionType);
    yield call(newSource);
  }
}

export function* newSource() {
  const existingFiles = yield select(selectors.files);
  const filesToAdd = yield call(ProjectService.createNewSourceFile, existingFiles);

  ProjectService.saveFiles([...existingFiles, filesToAdd]);
  yield put(storeActions.appendFile(filesToAdd));
}
