import { all } from 'redux-saga/effects'

import rootProjectSaga from '../../services/project/redux/sagas';

const rootSaga = function* () {
  yield all([
    rootProjectSaga(),
  ]);
};

export default rootSaga;
