import { combineReducers } from 'redux';

import sourceFileReducer from '../../services/project/redux/reducer';
import bundlerReducer from '../../services/bundler/redux/reducer';
import consoleReducer from '../../services/console/redux/reducer';

const rootReducer = combineReducers({
  sourceFileStore: sourceFileReducer,
  bundler: bundlerReducer,
  console: consoleReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
