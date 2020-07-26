import { connect } from 'react-redux';

import Console from './console';
import { RootState } from '../../setup/redux/rootReducer';

const mapStateToProps = (state : RootState) => ({
  messages: state.console.messages,
});

export type ConnectedProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Console);
