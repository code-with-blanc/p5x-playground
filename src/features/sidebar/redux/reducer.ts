import { SidebarState } from "./sidebarState";
import {
  SidebarActionTypes,
  ADD_SKETCH, REMOVE_SKETCH,
} from "./actions";

export const INITIAL_STATE: SidebarState = {
  sketches: [],
  selectedSketchId: null,
};

const reducer = (state = INITIAL_STATE,action: SidebarActionTypes): SidebarState => {
  switch(action.type) {
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
    default:
      return state;
  }
};

export default reducer;
