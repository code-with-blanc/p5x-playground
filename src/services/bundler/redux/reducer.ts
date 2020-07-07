import BundlerState from './bundlerState';
import type { BundlerAction } from './actions';

export const INITIAL_STATE: BundlerState = {
  isBuilding: false,
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
        bundle: action.payload.bundle,
      };
    default:
      return state;
  }
};

export default reducer;
