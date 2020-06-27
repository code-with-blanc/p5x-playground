import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { Actions } from '../../../../services/project/redux';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFiles: sourceFileStore.sourceFiles,
  activeSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  addSourceFile: () => dispatch(Actions.newSourceFile()),
  removeSourceFile: (id) => dispatch(Actions.removeSourceFile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
