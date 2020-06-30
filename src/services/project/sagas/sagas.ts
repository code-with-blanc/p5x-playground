/* eslint-disable no-console */
import {
  all, take, put, call,
} from 'redux-saga/effects';

import * as storeActions from '../redux/actions';
import type { SagaActionType } from './actions';
import ProjectService from '../projectService';

export default function* rootProjectSaga() {
  yield loadFromLocalStorage();
  
  yield all([
    watchNewSource(),
    watchUpdateSource(),
    watchRenameFile(),
    watchDeleteFile(),
  ]);
}

function* loadFromLocalStorage() {
  const sources = ProjectService.load();
  yield put(storeActions.setFileList(sources));
  yield put(storeActions.setActiveFileId(sources[0]?.id));
}

function* watchNewSource() {
  while (true) {
    yield take('project/sagas/NEW_SOURCE' as SagaActionType);
    yield call(newSource);
  }
}

function* newSource() {
  while (true) {
    yield take('project/sagas/NEW_SOURCE' as SagaActionType);

    console.log('Should create new source');

    // const existingSources = (yield select()).sourceFileStore.sourceFiles || [];
    // const newSource = ProjectService.createNewSourceFile(existingSources);
    // yield put(storeActions.addSourceFile(newSource));
  }
}

function* watchUpdateSource() {
  while (true) {
    yield take('project/sagas/UPDATE_SOURCE' as SagaActionType);
    console.log('Should update code');
  }
}

function* watchRenameFile() {
  while (true) {
    yield take('project/sagas/RENAME_FILE' as SagaActionType);
    console.log('Should rename file');
  }
}

function* watchDeleteFile() {
  while (true) {
    yield take('project/sagas/DELETE_FILE' as SagaActionType);
    console.log('Should delete file');
  }
}
