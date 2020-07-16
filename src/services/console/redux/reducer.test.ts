/* eslint-env jest */
import deepFreeze from 'deep-freeze';

import reducer from './reducer';
import * as actions from './actions';
import { ConsoleState } from './consoleState';
import { Message } from '../types';

describe('Console reducer', () => {
  it('message type: log', () => {
    const initialState = deepFreeze<ConsoleState>({
      messages: [],
      nextId: 1,
    }) as ConsoleState;
    
    const result = reducer(
      initialState,
      actions.log('my message'),
    );

    expect(result.messages[0].method).toEqual('log');
    expect(result.messages[0].data).toEqual(['my message']);
  });

  it('clears console', () => {
    const initialState = deepFreeze<ConsoleState>({
      messages: [getInfoMsg('Message 1', 1)],
      nextId: 2,
    }) as ConsoleState;

    const result = reducer(initialState, actions.clear());

    expect(result.messages.length).toEqual(0);
  });
});

const getInfoMsg = (text : string, id: number) => ({
  id: `${id}`,
  method: 'info',
  data: [text],
} as Message);
