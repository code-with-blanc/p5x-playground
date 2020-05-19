import { SketchStoreState } from "./sketchStoreState";
import {
  SketchActionTypes,
  ADD_SKETCH, REMOVE_SKETCH, SET_ACTIVE, SET_SKETCHES,
} from "./actions";

import Repository from '..';

export const INITIAL_STATE: SketchStoreState = {
  sketches: Repository.getAll(),
  activeSketchId: null,
};

const reducer = (state = INITIAL_STATE, action: SketchActionTypes): SketchStoreState => {
  switch(action.type) {
    case SET_SKETCHES:
      return {
        ...state,
        sketches: action.payload,
      }
    case ADD_SKETCH:
      return {
          ...state,
          sketches: [...state.sketches, action.payload],
        };
    case REMOVE_SKETCH:
      return {
        ...state,
        sketches: state.sketches.filter(s => s.id !== action.payload)
      }
    case SET_ACTIVE:
      return {
        ...state,
        activeSketchId: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
