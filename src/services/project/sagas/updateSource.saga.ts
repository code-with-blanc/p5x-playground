import { take, select, put } from 'redux-saga/effects';

import * as storeActions from '../redux/actions';
import * as selectors from '../redux/selectors';

import * as actions from './actions';
import type { SagaActionType } from './actions';
import ProjectService from '../projectService';


export function* watchUpdateSource() {
  while (true) {
    const action = yield take('project/sagas/UPDATE_SOURCE' as SagaActionType);
    yield updateSource(action);
  }
}

export function* updateSource(action: ReturnType<typeof actions.updateSource>) {
  const { id, newCode } = action.payload;

  const files = selectors.files(yield select());
  files.map((f) => {
    if (f.id === id) { return { ...f, code: newCode }; }
    return f;
  });

  ProjectService.saveFiles(files);
  yield put(storeActions.patchFile(id, { code: newCode }));
}
