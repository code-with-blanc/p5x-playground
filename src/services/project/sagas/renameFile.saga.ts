import { call, take, delay } from 'redux-saga/effects';
import type { SagaActionType } from './actions';

export function* watchRenameFile() {
  while (true) {
    yield take('project/sagas/RENAME_FILE' as SagaActionType);
    yield call(renameFile);
  }
}

export function* renameFile() {
  console.log('Should rename file');
  yield delay(100);
}
