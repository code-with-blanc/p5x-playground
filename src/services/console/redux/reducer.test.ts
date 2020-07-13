/* eslint-env jest */
import deepFreeze from 'deep-freeze';

import reducer from './reducer';
import * as actions from './actions';
import { ConsoleState } from './consoleState';

describe('Console reducer', () => {
  it('message type: log', () => {
    const initialState = deepFreeze<ConsoleState>({
      messages: [],
    }) as ConsoleState;
    
    const result = reducer(
      initialState,
      actions.log('my message'),
    );

    expect(result.messages[0].method).toEqual('log');
    expect(result.messages[0].data).toEqual('my message');
  });
});
