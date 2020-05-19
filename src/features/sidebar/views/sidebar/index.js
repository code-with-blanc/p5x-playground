import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { Operations } from '../../../../repository/sketch/redux';

const mapStateToProps = ({ sketchStore }) => ({
  sketches: sketchStore.sketches,
});

const mapDispatchToProps = (dispatch) => ({
  addSketch: Operations.newSketch(dispatch),
  getSketches: Operations.getSketches(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);