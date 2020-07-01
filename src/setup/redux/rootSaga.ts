import { all } from 'redux-saga/effects';

import rootProjectSaga from '../../services/project/sagas/rootSaga';

export default function* rootSaga() {
  yield all([
    rootProjectSaga(),
  ]);
}
