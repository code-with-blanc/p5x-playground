import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { Operations } from '../../../../repository/sketch/redux';

const mapStateToProps = ({ sketchStore }) => ({
  sketches: sketchStore.sketches,
  activeSketchId: sketchStore.activeSketchId,
});

const mapDispatchToProps = (dispatch) => ({
  addSketch: Operations.newSketch(dispatch),
  removeSketch: (id) => Operations.removeSketch(dispatch)(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);