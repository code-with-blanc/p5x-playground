import { combineReducers } from 'redux';

import sourceFileReducer from '../../services/project/redux';

export default combineReducers({
  sourceFileStore: sourceFileReducer,
});
