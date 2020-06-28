import { all, take, put, select } from 'redux-saga/effects';

import * as storeActions from '../redux/actions';
import * as sagaActions from './actions';
import ProjectService from '../projectService';

export default function* rootProjectSaga() {
  yield loadFromLocalStorage();
  
  yield all([
    addSourceSaga(),
  ]);
}

function* addSourceSaga() {
  while (true) {
    yield take(sagaActions.ADD_SOURCE);

    const existingSources = (yield select()).sourceFileStore.sourceFiles || [];
    console.log(existingSources);
    const newSource = ProjectService.createNewSourceFile(existingSources);

    // yield put(storeActions.addSourceFile(newSource));
  }
}

function* loadFromLocalStorage() {
  const sources = ProjectService.load();
  yield put(storeActions.setSourceFiles(sources));
  yield put(storeActions.setActiveSourceFileId(sources[0]?.id));
}
