import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { newSketch } from '../../../../redux/sketchStore/operations';

const mapStateToProps = ({ sketchStore }) => ({
  sketches: sketchStore.sketches,
});

const mapDispatchToProps = (dispatch) => ({
  addSketch: newSketch(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);