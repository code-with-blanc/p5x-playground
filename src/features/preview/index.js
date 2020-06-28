import { connect } from 'react-redux';

import { Selectors } from '../../services/project/redux';

import Preview from './preview';

const mapStateToProps = (state) => ({
  sourceFile: Selectors.activeSourceFile(state),
});

export default connect(mapStateToProps)(Preview);
