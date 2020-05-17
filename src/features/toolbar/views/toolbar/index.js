import { connect } from 'react-redux';

import * as Selectors from '../../../../redux/sketchStore/selectors';

import Toolbar from './toolbar';

const mapStateToProps = ({sketchStore}) => ({
  name: Selectors.currentSketch(sketchStore)?.name,
});

export default connect(mapStateToProps)(Toolbar);