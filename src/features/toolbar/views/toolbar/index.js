import { connect } from 'react-redux';

import { Selectors } from '../../../../repository/sketch/redux';

import Toolbar from './toolbar';

const mapStateToProps = ({sketchStore}) => ({
  name: Selectors.activeSketch(sketchStore)?.name,
});

export default connect(mapStateToProps)(Toolbar);