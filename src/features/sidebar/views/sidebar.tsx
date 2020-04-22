import React from 'react';

import { Sketch } from '../types/sketch';
import { Fab } from '../../../common/';

import SketchRow from './SketchRow';

const newSketch : Sketch = {
  id: 1234,
  name: 'New Sketch',
};

interface SidebarProps {
  className: string;
  sketches: Sketch[];
  addSketch: (arg0: Sketch) => void;
}

const Sidebar = (props: SidebarProps) => (
  <div className={props.className}>
    {props.sketches.map((s, i) => (
      <SketchRow sketch={s} />
    ))}

    <div style={{padding: "10px"}}>
      <Fab
        onClick={() => { props.addSketch(newSketch); }}
      />
    </div>
  </div>
);

export default Sidebar;
