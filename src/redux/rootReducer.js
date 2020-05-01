import { combineReducers } from 'redux';

import * as Sidebar from './sketchStore';

export default combineReducers({
    sidebarStore: Sidebar.reducer,
});
