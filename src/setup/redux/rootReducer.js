import { combineReducers } from 'redux';

import sketchReducer from '../../repository/sketch/redux';

export default combineReducers({
    sketchStore: sketchReducer,
});
