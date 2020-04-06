import { combineReducers } from 'redux';

import * as Sidebar from '../features/sidebar/redux';

export default combineReducers({
    sidebarStore: Sidebar.reducer,
});
