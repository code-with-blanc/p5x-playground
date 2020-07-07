import { connect } from 'react-redux';

import Preview from './preview';
import { RootState } from '../../setup/redux/rootReducer';

const mapStateToProps = (rootState : RootState) => ({
  bundle: rootState.bundler.bundle,
});

export default connect(mapStateToProps)(Preview as any);
