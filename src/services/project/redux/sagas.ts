import { all, take, put, select } from 'redux-saga/effects';

import * as actions from './actions';
import ProjectService from '../projectService';

export default function* rootProjectSaga() {
  yield loadFromLocalStorage();
  
  yield all([
    addSourceSaga(),
  ]);
}

function* addSourceSaga() {
  while (true) {
    yield take(actions.NEW_SOURCE);

    const existingSources = (yield select()).sourceFileStore.sourceFiles || [];
    console.log(existingSources);
    const newSource = ProjectService.createNewSourceFile(existingSources);

    yield put(actions.addSourceFile(newSource));
  }
}

function* loadFromLocalStorage() {
  const sources = ProjectService.load();
  yield put(actions.setSourceFiles(sources));
  yield put(actions.setActiveSourceFileId(sources[0]?.id));
}
