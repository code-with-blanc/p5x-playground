import { take, select, put } from 'redux-saga/effects';

import * as storeActions from '../redux/actions';
import * as selectors from '../redux/selectors';

import * as actions from './actions';
import type { SagaActionType } from './actions';
import ProjectService from '../projectService';

export function* watchDeleteFile() {
  while (true) {
    const action = yield take('project/sagas/DELETE_FILE' as SagaActionType);
    yield deleteFile(action);
  }
}

export function* deleteFile(action: ReturnType<typeof actions.deleteFile>) {
  const { id } = action.payload;

  let files = selectors.files(yield select());
  files = files.filter((f) => f.id !== id);

  ProjectService.saveSources(files);
  yield put(storeActions.setFileList(files));
}
