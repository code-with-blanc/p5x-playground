import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { newSketch } from '../../redux/operations';

const mapStateToProps = ({ sidebarStore }) => ({
  sketches: sidebarStore.sketches,
});

const mapDispatchToProps = (dispatch) => ({
  addSketch: newSketch(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);