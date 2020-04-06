/* eslint-env jest */

import reducer, { INITIAL_STATE } from './reducer';

describe('sidebar reducer', () => {
  it('should add sketches', () => {
    const sketchObj = {
      code: 'xpto',
    };

    const res = reducer(INITIAL_STATE, { type: 'ADD_SKETCH', payload: sketchObj });

    expect(res.sketches).toHaveLength(1);
    expect(res.sketches[0]).toEqual(sketchObj);

    const otherSketch = {
      code: 'let a = 0',
    };

    const res2 = reducer(res, { type: 'ADD_SKETCH', payload: otherSketch});
    expect(res2.sketches).toHaveLength(2);
    expect(res2.sketches).toEqual([sketchObj, otherSketch])
  })

  it('should handle deafault/unknown action', () => {
    const mockState = { a: 1 };
    const res = reducer(mockState, { type: 'unknown_action' })
  
    expect(res).toEqual(mockState);
  })
})

