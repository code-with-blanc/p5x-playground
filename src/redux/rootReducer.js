import { combineReducers } from 'redux';

import * as Sketch from './sketchStore';

export default combineReducers({
    sketchStore: Sketch.reducer,
});
