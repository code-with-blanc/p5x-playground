import { connect } from 'react-redux';

import { selectors, actions as projectActions } from '../../services/project';
import { actions as bundlerActions } from '../../services/bundler';

import Editor from './editor';

const mapStateToProps = (state) => ({
  sourceFile: selectors.activeSourceFile(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCode: (id, newCode) => dispatch(projectActions.updateSource(id, newCode)),
  requestBuild: () => dispatch(bundlerActions.requestBuild(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
