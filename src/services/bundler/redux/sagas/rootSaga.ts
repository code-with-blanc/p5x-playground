import { all } from 'redux-saga/effects';

import { watchRequestBuild } from './build.saga';

export default function* rootSaga() {
  yield all([
    watchRequestBuild(),
  ]);
}
