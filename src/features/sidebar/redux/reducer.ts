import Sketch from "./sketch";

export const INITIAL_STATE = {
  sketches: [] as Sketch[],
};

const reducer = (state = INITIAL_STATE, action: any = {type: 'DEFAULT'}) => {
  switch(action.type) {
    case 'ADD_SKETCH':
      return {
        ...state,
        sketches: [...state.sketches, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
