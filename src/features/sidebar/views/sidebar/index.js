import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { actions } from '../../../../services/project';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFiles: sourceFileStore.sourceFiles,
  activeSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  addSourceFile: () => dispatch(actions.newSourceFile()),
  removeSourceFile: (id) => dispatch(actions.removeSourceFile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
