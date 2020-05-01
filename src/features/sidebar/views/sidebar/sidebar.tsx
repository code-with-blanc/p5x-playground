import React from 'react';

import { Sketch } from '../../../../repository/sketch';
import { Fab } from '../../../../common';

import SketchRow from '../SketchRow';

const Sidebar = (props: SidebarProps) => (
  <div className={props.className}>
    {props.sketches?.map((s, i) => (
      <SketchRow sketch={s} key={i} />
    ))}

    <div style={{padding: "10px"}}>
      <Fab
        onClick={() => { props.addSketch(); }}
      />
    </div>
  </div>
);

interface SidebarProps {
  className: string;
  sketches: Sketch[];
  addSketch: () => void;
}

export default Sidebar;
