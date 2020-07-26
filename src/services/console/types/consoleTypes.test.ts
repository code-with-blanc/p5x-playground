/* eslint-env jest */

import { Console } from 'console-feed';

import { Methods, Message } from '.';

// console-feed doesn't seem to export the types
// for its arguments so we have to define them manually.
//
// This test assures our types are compatible with the library

describe('Console module types', () => {
  it('', () => {
    const ourLogs : Message[] = [{
      id: 'msg_1',
      method: 'log' as Methods,
      data: ['First arg to console.log()', 'second arg'],
    }];

    // The Console component is just a regular class that receives 
    // props on the constructor. ts compiler should complain if
    // our type definition doesn't match the library
    //
    // We don't care about rendering here, so just creating
    // the object is enough
    const c = new Console({
      logs: ourLogs,
    });
  
    expect(c).toBeInstanceOf(Console);
  });
});
