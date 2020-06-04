import { SketchStoreState } from './sketchStoreState';
import {
  SketchAction,
  ADD_SKETCH, REMOVE_SKETCH, SET_ACTIVE, SET_SKETCHES, PATCH_SKETCH, UPDATE_SKETCH,
} from './actions';

import Repository from '..';

const getInitialState = () => {
  const sketches = Repository.load() || [{}];

  return {
    sketches,
    activeSketchId: sketches[0]?.id,
  };
};

export const INITIAL_STATE: SketchStoreState = getInitialState();

const reducer = (state = INITIAL_STATE, action: SketchAction<any>): SketchStoreState => {
  switch (action.type) {
    case SET_SKETCHES:
      return {
        ...state,
        sketches: action.payload,
      };
    case ADD_SKETCH:
      return {
        ...state,
        sketches: [...state.sketches, action.payload],
      };
    case REMOVE_SKETCH:
      return {
        ...state,
        sketches: state.sketches.filter((s) => s.id !== action.payload),
      };
    case UPDATE_SKETCH:
      return {
        ...state,
        sketches: state.sketches.map((s) => {
          if (s.id === action.payload?.id) {
            return { ...action.payload };
          }
          return s;
        }),
      };
    case SET_ACTIVE:
      return {
        ...state,
        activeSketchId: action.payload,
      };
    case PATCH_SKETCH:
      return {
        ...state,
        sketches: state.sketches.map((s) => {
          if (s.id === action.payload.id) {
            return {
              ...s,
              code: action.payload.code,
            };
          }

          return s;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
