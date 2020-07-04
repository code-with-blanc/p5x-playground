import { take } from 'redux-saga/effects';

import * as actions from './actions';

// eslint-disable-next-line import/prefer-default-export
export function* watchRequestBuild() {
  while (true) {
    yield take(actions.types.ReqBuild);
    console.log('Build requested!');
  }
}
