import { combineReducers } from 'redux';

import SketchLoaderReducer from '../modules/sketchLoader/redux';

export default combineReducers({
    sketchLoaderStore: SketchLoaderReducer,
});
