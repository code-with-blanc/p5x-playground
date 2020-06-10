import { connect } from 'react-redux';

import SourceFileList from './sourceFileList';

import { Operations } from '../../../../services/project/redux';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFilees: sourceFileStore.sourceFilees,
  selectedSourceFileId: sourceFileStore.activeSourceFileId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (id) => Operations.setActiveSourceFile(dispatch)(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceFileList);
