/* eslint-env jest */
import deepFreeze from 'deep-freeze';

import { Sketch } from '../types/sketch';
import reducer, { INITIAL_STATE } from './reducer';
import * as Actions from './actions';

describe('sidebar reducer', () => {
  it('should handle deafault/unknown action', () => {
    const mockState = { a: 1 };
    const res = reducer(mockState, { type: 'unknown_action' })
  
    expect(res).toEqual(mockState);
  })
  
  it('should add sketches', () => {
    const sketchObj = {
      code: 'xpto',
    };

    const otherSketch = {
      code: 'let a = 0',
    };

    const state = Object.assign({}, INITIAL_STATE);

    // Add first sketch
    const res1 = reducer(deepFreeze(state), Actions.addSketch(sketchObj));

    expect(res1.sketches).toHaveLength(1);
    expect(res1.sketches[0]).toEqual(sketchObj);

    // Add second sketch
    const res2 = reducer(res1, Actions.addSketch(otherSketch));
    expect(res2.sketches).toHaveLength(2);
    expect(res2.sketches).toEqual([sketchObj, otherSketch])
  })

  it('should remove sketches', () => {
    const state = Object.assign(
      INITIAL_STATE,
      {
        sketches: [
          new Sketch(0, "Sketch 0"),
          new Sketch(1, "Sketch 1"),
          new Sketch(2, "Skecth 2")
        ]
      }
    );

    const res = reducer(deepFreeze(state), Actions.removeSketch(1));

    const ids = res.sketches.map(s => s.id);
    expect(ids).toHaveLength(2);
    expect(ids).toContain(0);
    expect(ids).toContain(2);
    expect(ids).not.toContain(1);
  })
})

