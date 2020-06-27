import { connect } from 'react-redux';

import SourceFileList from './sourceFileList';

import { Actions } from '../../../../services/project/redux';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFiles: sourceFileStore.sourceFiles,
  selectedSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (id) => dispatch(Actions.setActiveSourceFileId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceFileList);
