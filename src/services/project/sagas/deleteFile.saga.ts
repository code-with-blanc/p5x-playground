import { take, select } from 'redux-saga/effects';

import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';

import ProjectService from '../projectService';

export function* watchDeleteFile() {
  while (true) {
    yield take(actions.deleteFile(0).type);
    yield deleteFile();
  }
}

export function* deleteFile() {
  const files = selectors.files(yield select());
  ProjectService.saveFiles(files);
}
