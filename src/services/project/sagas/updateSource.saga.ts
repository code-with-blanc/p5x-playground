import { call, take, delay } from 'redux-saga/effects';
import type { SagaActionType } from './actions';

export function* watchUpdateSource() {
  while (true) {
    yield take('project/sagas/UPDATE_SOURCE' as SagaActionType);
    yield call(updateSource);
  }
}

export function* updateSource() {
  console.log('Should update source');
  yield delay(100);
}
