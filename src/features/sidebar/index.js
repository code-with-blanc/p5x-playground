import { connect } from 'react-redux';

import Sidebar from './views/sidebar';
import { addSketch } from './redux/actions';

const mapStateToProps = ({ sidebarStore }) => ({
  sketches: sidebarStore.sketches,
});

const mapDispatchToProps = (dispatch) => ({
  addSketch: (sketch) => dispatch(addSketch(sketch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);