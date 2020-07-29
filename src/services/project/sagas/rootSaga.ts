/* eslint-disable no-console */
import { all, put } from 'redux-saga/effects';

import ProjectService from '../projectService';

import * as actions from '../redux/actions';
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
  const projects = ProjectService.loadProjects();
  const sources = ProjectService.loadFiles();

  yield put(actions.setFileList(sources));
  yield put(actions.setActiveFileId(sources[0]?.id));
  yield put(actions.setProjectList(projects));
  yield put(actions.setActiveProjectId(projects[0]?.id));
}
