/* eslint-disable no-console */
import { all, put } from 'redux-saga/effects';

import ProjectService from '../projectService';

import * as storeActions from '../redux/actions';
import { watchNewSource } from './newSource.saga';
import { watchUpdateSource } from './updateSource.saga';
import { watchRenameFile } from './renameFile.saga';
import { watchDeleteFile } from './deleteFile.saga';


export default function* rootSaga() {
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
