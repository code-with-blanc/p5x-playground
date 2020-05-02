import { connect } from 'react-redux';

import * as Selectors from '../../redux/sketchStore/selectors';
import * as Operations from '../../redux/sketchStore/operations';

import Editor from './editor';

const mapStateToProps = ({ sketchStore }) => ({
  sketch: Selectors.currentSketch(sketchStore),
});

const mapDispatchToProps = (dispatch) => ({
  getSketches: Operations.getSketches(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
