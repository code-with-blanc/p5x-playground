import { connect } from 'react-redux';

import SourceFileList from './sourceFileList';

import { actions } from '../../../../services/project';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFiles: sourceFileStore.sourceFiles,
  selectedSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (id) => dispatch(actions.setActiveFileId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceFileList);
