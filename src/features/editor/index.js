import { connect } from 'react-redux';

import { Selectors, Operations } from '../../repository/sketch/redux';

import Editor from './editor';

const mapStateToProps = ({ sketchStore }) => ({
  sketch: Selectors.activeSketch(sketchStore),
});

const mapDispatchToProps = (dispatch) => ({
  updateCode: Operations.updateCode(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
