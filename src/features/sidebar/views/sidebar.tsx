import React from 'react';

import { Sketch } from '../types/sketch';
import { Fab } from '../../../common/';

interface SidebarProps {
  className: string;
  sketches: Sketch[];
  addSketch: (arg0: Sketch) => void;
}

const Sidebar = (props: SidebarProps) => (
  <div className={props.className}>
    {props.sketches.map((s, i) => (
      <div key={i}>
        {s.name}
      </div>
    ))}

    <div style={{padding: "10px"}}>
      <Fab />
    </div>
  </div>
);

export default Sidebar;
