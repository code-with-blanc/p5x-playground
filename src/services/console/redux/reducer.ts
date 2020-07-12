import { ConsoleState } from './consoleState';
import type { ConsoleAction } from './actions';

import commit from '../../../commit_number';

export const INITIAL_STATE: ConsoleState = {
  messages: [{
    method: 'info',
    args: [`Version ${commit}`],
  }],
};

const reducer = (state = INITIAL_STATE, action: ConsoleAction): ConsoleState => {
  switch (action.type) {
    case 'console/PUT_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    default:
      return state;
  }
};

export default reducer;
