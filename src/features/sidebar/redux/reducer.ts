import { SidebarState } from "../types/sidebarState";
import { SidebarActionTypes, ADD_SKETCH } from "../types/sidebarActions";

const mockSketches = [
  {
    name: 'Tutorial',
    id: 1,
  },
  {
    name: 'My_sketch_1',
    id: 2,
  }
];

export const INITIAL_STATE: SidebarState = {
  sketches: mockSketches,
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
