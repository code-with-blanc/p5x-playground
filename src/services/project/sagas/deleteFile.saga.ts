import { call, take, delay } from 'redux-saga/effects';
import type { SagaActionType } from './actions';

export function* watchDeleteFile() {
  while (true) {
    yield take('project/sagas/DELETE_FILE' as SagaActionType);
    yield call(deleteFile);
  }
}

export function* deleteFile() {
  console.log('Should delete file');
  yield delay(100);
}
