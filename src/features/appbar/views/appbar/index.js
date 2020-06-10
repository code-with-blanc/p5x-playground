import { connect } from 'react-redux';

import { Selectors, Operations } from '../../../../services/project/redux';

import AppBar from './appbar';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFile: Selectors.activeSourceFile(sourceFileStore),
  date: Date.now(),
});

const mapDispatchToProps = (dispatch) => ({
  patchSourceFile: (id, name) => Operations.patchSourceFile(dispatch)(id, { name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
