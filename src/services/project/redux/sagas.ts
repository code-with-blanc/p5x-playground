import { all, take } from 'redux-saga/effects';

export default function* rootProjectSaga() {
  yield loadFromLocalStorage();
  
  yield all([
    updateCodeSaga(),
  ]);
}

function* updateCodeSaga() {
  while(true) {
    yield take( () => ({ type: 'update_code_action'}) );

    // update code in store and in LS
  }
}

function* loadFromLocalStorage() {
  console.log('Should load projects from local storage');
  //yield put(REGISTER_LOADED_TO_STORE)
}