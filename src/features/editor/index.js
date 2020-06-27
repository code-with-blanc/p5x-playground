import { connect } from 'react-redux';

import { Selectors, Actions } from '../../services/project/redux';

import Editor from './editor';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFile: Selectors.activeSourceFile(sourceFileStore),
});

const mapDispatchToProps = (dispatch) => ({
  updateCode: (id, value) => dispatch(Actions.updateCode(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
