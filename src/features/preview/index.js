import { connect } from 'react-redux';

import { Selectors } from '../../services/project/redux';

import Preview from './preview';

const mapStateToProps = ({ sourceFileStore }) => ({
  sourceFile: Selectors.activeSourceFile(sourceFileStore),
});

export default connect(mapStateToProps)(Preview);
