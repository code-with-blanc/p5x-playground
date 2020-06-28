import { connect } from 'react-redux';

import { selectors } from '../../services/project';

import Preview from './preview';

const mapStateToProps = (state) => ({
  sourceFile: selectors.activeSourceFile(state),
});

export default connect(mapStateToProps)(Preview);
