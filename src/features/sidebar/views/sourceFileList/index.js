import { connect } from 'react-redux';

import SourceFileList from './sourceFileList';

import { actions } from '../../../../services/project';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFiles: sourceFileStore.sourceFiles,
  selectedSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (id) => dispatch(actions.setActiveSourceFileId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceFileList);
