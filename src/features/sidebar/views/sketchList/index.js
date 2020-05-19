import { connect } from 'react-redux';

import SketchList from './sketchList';

import { Operations } from '../../../../repository/sketch/redux';

const mapStateToProps = ({ sketchStore }) => ({
  sketches: sketchStore.sketches,
  selectedSketchId: sketchStore.selectedSketchId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (id) => Operations.setActiveSketch(dispatch)(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(SketchList);
