import * as storeActions from './redux/actions';
import * as sagaActions from './sagas/actions';
import * as selectors from './redux/selectors';

const actions = {
  setActiveFileId: storeActions.setActiveFileId,
  ...sagaActions,
};

export { actions, selectors };
