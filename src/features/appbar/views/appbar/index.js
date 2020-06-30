import { connect } from 'react-redux';

import { selectors, actions } from '../../../../services/project';

import AppBar from './appbar';

const mapStateToProps = (state) => ({
  sourceFile: selectors.activeSourceFile(state),
  date: Date.now(),
});

const mapDispatchToProps = (dispatch) => ({
  renameFile: (id, name) => dispatch(actions.renameFile(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
