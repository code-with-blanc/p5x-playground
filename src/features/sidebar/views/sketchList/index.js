import { connect } from 'react-redux';

import SketchList from './sketchList';

import { setSelectedSketch } from '../../../../redux/sketchStore/operations';

const mapStateToProps = ({ sketchStore }) => ({
  sketches: sketchStore.sketches,
  selectedSketchId: sketchStore.selectedSketchId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (id) => setSelectedSketch(dispatch)(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(SketchList);
