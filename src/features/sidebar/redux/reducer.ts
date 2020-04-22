import { SidebarState } from "../types/sidebarState";
import { SidebarActionTypes, ADD_SKETCH } from "../types/sidebarActions";

export const INITIAL_STATE: SidebarState = {
  sketches: [],
  selectedSketchId: null,
};

const reducer = (state = INITIAL_STATE, action: SidebarActionTypes): SidebarState => {
  switch(action.type) {
    case ADD_SKETCH:
      return {
        ...state,
        sketches: [...state.sketches, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
