import { connect } from 'react-redux';

import { Selectors, Actions } from '../../../../services/project/redux';

import AppBar from './appbar';

const mapStateToProps = (state) => ({
  sourceFile: Selectors.activeSourceFile(state),
  date: Date.now(),
});

const mapDispatchToProps = (dispatch) => ({
  patchSourceFile: (id, name) => dispatch(Actions.patchSourceFile(id, { name })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
