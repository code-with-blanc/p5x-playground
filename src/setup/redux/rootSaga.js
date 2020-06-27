import { all } from 'redux-saga/effects';

import rootProjectSaga from '../../services/project/redux/sagas';

export default function* rootSaga() {
  yield all([
    rootProjectSaga(),
  ]);
}
