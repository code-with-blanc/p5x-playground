import { all } from 'redux-saga/effects';

import rootProjectSaga from '../../services/project/sagas/rootSaga';
import rootBundlerSaga from '../../services/bundler/redux/sagas/rootSaga';

export default function* rootSaga() {
  yield all([
    rootProjectSaga(),
    rootBundlerSaga(),
  ]);
}
