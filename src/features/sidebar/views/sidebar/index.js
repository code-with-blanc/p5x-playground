import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { actions } from '../../../../services/project';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFiles: sourceFileStore.sourceFiles,
  activeSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  addSourceFile: () => dispatch(actions.newSource()),
  removeSourceFile: (id) => dispatch(actions.deleteFile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
