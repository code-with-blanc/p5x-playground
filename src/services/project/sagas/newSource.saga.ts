import {
  call, take, select,
} from 'redux-saga/effects';

import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';
import ProjectService from '../projectService';

export function* watchNewSource() {
  while (true) {
    yield take(actions.createFile().type);
    yield call(newSource);
  }
}

export function* newSource() {
  const files = yield select(selectors.files);
  ProjectService.saveFiles(files);
}
