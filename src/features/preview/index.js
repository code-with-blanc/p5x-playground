import { connect } from 'react-redux';

import { Selectors } from '../../repository/sketch/redux';

import Preview from './preview';

const mapStateToProps = ({ sketchStore }) => ({
  sketch: Selectors.activeSketch(sketchStore),
});

export default connect(mapStateToProps)(Preview);
