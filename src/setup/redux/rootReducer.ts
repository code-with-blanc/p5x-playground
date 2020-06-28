import { combineReducers } from 'redux';

import sourceFileReducer from '../../services/project/redux/reducer';
import ProjectState from '../../services/project/redux/projectState';

export default combineReducers({
  sourceFileStore: sourceFileReducer,
});

export type RootState = {
  sourceFileStore: ProjectState;
};
