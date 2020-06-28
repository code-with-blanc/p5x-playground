import { connect } from 'react-redux';

import { selectors, actions } from '../../services/project';

import Editor from './editor';

const mapStateToProps = (state) => ({
  sourceFile: selectors.activeSourceFile(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCode: (id, value) => dispatch(actions.updateCode(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
