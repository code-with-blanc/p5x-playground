import { connect } from 'react-redux';

import { Selectors, Operations } from '../../repository/sketch/redux';

import Editor from './editor';

const mapStateToProps = ({ sketchStore }) => ({
  sketch: Selectors.activeSketch(sketchStore),
});

const mapDispatchToProps = (dispatch) => ({
  getSketches: Operations.getSketches(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
