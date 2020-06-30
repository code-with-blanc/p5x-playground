import { connect } from 'react-redux';

import { selectors, actions } from '../../services/project';

import Editor from './editor';

const mapStateToProps = (state) => ({
  sourceFile: selectors.activeSourceFile(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCode: (id, newCode) => dispatch(actions.updateSource(id, newCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
