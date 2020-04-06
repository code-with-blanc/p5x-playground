export const INITIAL_STATE = {
  sketches: [],
};

const reducer = (state = INITIAL_STATE, action = {type: 'DEFAULT'}) => {
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
