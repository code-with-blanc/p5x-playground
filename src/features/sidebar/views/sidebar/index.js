import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { actions } from '../../../../services/project';

const mapStateToProps = ({ projects }) => ({
  sourceFiles: projects.sourceFiles,
  activeSourceFileId: projects.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  addSourceFile: () => dispatch(actions.newSource()),
  removeSourceFile: (id) => dispatch(actions.deleteFile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
