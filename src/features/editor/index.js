import { connect } from 'react-redux';

import { Selectors, Operations } from '../../services/project/redux';

import Editor from './editor';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFile: Selectors.activeSourceFile(sourceFileStore),
});

const mapDispatchToProps = (dispatch) => ({
  updateCode: Operations.updateCode(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
