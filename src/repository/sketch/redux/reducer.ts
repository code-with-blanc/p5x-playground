import { SketchStoreState } from '../../types/sketchStoreState';
import {
  SketchAction,
  ADD_SKETCH, REMOVE_SKETCH, SET_ACTIVE, SET_SKETCHES, PATCH_SKETCH, UPDATE_SKETCH, PayloadTypes,
} from './actions';

import Repository, { Sketch } from '..';

const getInitialState = () => {
  const sketches = Repository.load() || [{}];

  return {
    sketches,
    activeSketchId: sketches[0]?.id,
  };
};

export const INITIAL_STATE: SketchStoreState = getInitialState();

const reducer = (state = INITIAL_STATE, action: SketchAction<PayloadTypes>): SketchStoreState => {
  switch (action.type) {
    case SET_SKETCHES:
      return {
        ...state,
        sketches: action.payload as Sketch[],
      };
    case ADD_SKETCH:
      return {
        ...state,
        sketches: [...state.sketches, action.payload as Sketch],
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
          const newSketchInfo = action.payload as Partial<Sketch>;
          if (s.id === newSketchInfo?.id) {
            return { ...s, ...newSketchInfo };
          }

          return s;
        }),
      };
    case SET_ACTIVE:
      return {
        ...state,
        activeSketchId: action.payload as number,
      };
    case PATCH_SKETCH:
      return {
        ...state,
        sketches: state.sketches.map((s) => {
          const patch = action.payload as Partial<Sketch>;
          if (s.id === patch?.id) {
            return {
              ...s,
              ...patch,
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
