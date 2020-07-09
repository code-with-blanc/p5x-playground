import BundlerState from './bundlerState';
import type { BundlerAction } from './actions';

export const INITIAL_STATE: BundlerState = {
  isBuilding: false,
  buildError: null,
  bundle: null,
};

const reducer = (state = INITIAL_STATE, action: BundlerAction): BundlerState => {
  switch (action.type) {
    case 'bundler/BEGIN_BUILD':
      return {
        ...state,
        isBuilding: true,
      };
    case 'bundler/FINISH_BUILD':
      return {
        ...state,
        isBuilding: false,
        buildError: null,
        bundle: action.payload.bundle,
      };
    case 'bundler/FINISH_BUILD_ERROR':
      return {
        ...state,
        isBuilding: false,
        buildError: action.payload.error,
        bundle: null,
      };
    default:
      return state;
  }
};

export default reducer;
