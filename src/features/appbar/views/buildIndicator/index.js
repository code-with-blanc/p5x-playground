import { connect } from 'react-redux';

import BuildIndicator from './buildIndicator';

function mapStateToProps(state) {
  return {
    isError: !!state.bundler.buildError,
    isBuilding: state.bundler.isBuilding,
  };
}

export default connect(mapStateToProps)(BuildIndicator);
