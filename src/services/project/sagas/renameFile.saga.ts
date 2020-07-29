import {
  take, select, put,
} from 'redux-saga/effects';

import * as actions from './actions';
import * as storeActions from '../redux/actions';
import * as selectors from '../redux/selectors';
import ProjectService from '../projectService';

export function* watchRenameFile() {
  while (true) {
    const action = yield take(actions.renameFile(0, '').type);
    yield renameFile(action);
  }
}

export function* renameFile(action: ReturnType<typeof actions.renameFile>) {
  const { id, newName } = action.payload;
  
  const files = selectors.files(yield select());
  files.map((f) => {
    if (f.id === id) {
      return { ...f, name: newName };
    }
    return f;
  });

  ProjectService.saveFiles(files);
  yield put(storeActions.patchFile(id, { name: newName }));
}
