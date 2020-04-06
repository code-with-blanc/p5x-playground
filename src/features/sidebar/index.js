import { connect } from 'react-redux';

import Sidebar from './views/sidebar';

const mapStateToProps = ({ sidebarStore }) => ({
  sketches: sidebarStore.sketches,
});

const mapDispatchToProps = (dispatch) => ({
  addSketch: () => dispatch({type: 'ADD_SKETCH', payload: {
    name: 'new sketch',
  }})
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);