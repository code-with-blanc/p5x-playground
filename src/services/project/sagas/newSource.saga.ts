import {
  call, take, select, put,
} from 'redux-saga/effects';

import type { RootState } from '../../../setup/redux/rootReducer';
import type { SagaActionType } from './actions';

import * as storeActions from '../redux/actions';
import ProjectService from '../projectService';

export function* watchNewSource() {
  while (true) {
    yield take('project/sagas/NEW_SOURCE' as SagaActionType);
    yield call(newSource);
  }
}

export function* newSource() {
  const existingSources = yield select((state : RootState) => state.sourceFileStore.sourceFiles || []);
  const sourceToAdd = yield call(ProjectService.createNewSourceFile, existingSources);

  yield put(storeActions.appendFile(sourceToAdd));
}
