import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { Operations } from '../../../../services/project/redux';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFiles: sourceFileStore.sourceFiles,
  activeSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  addSourceFile: Operations.newSourceFile(dispatch),
  removeSourceFile: (id) => Operations.removeSourceFile(dispatch)(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
