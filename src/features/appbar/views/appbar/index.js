import { connect } from 'react-redux';

import { Selectors, Operations } from '../../../../repository/sketch/redux';

import AppBar from './appbar';

const mapStateToProps = ({ sketchStore }) => ({
  sketch: Selectors.activeSketch(sketchStore),
  date: Date.now(),
});

const mapDispatchToProps = (dispatch) => ({
  patchSketch: (id, name) => Operations.patchSketch(dispatch)(id, { name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
