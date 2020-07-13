import { ConsoleState } from './consoleState';
import type { ConsoleAction } from './actions';

import commit from '../../../commit_number';
import { Message } from '../types';

export const INITIAL_STATE: ConsoleState = {
  messages: [{
    id: '1',
    method: 'info',
    data: [`Version ${commit}`],
  }],
  nextId: 2,
};

const reducer = (state = INITIAL_STATE, action: ConsoleAction): ConsoleState => {
  switch (action.type) {
    case 'console/PUT_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, {
          id: `${state.nextId}`,
          method: action.payload.method,
          data: action.payload.args,
        } as Message],
        nextId: state.nextId + 1,
      };
    default:
      return state;
  }
};

export default reducer;
