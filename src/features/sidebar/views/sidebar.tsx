import React from 'react';
import Button from '@material-ui/core/Button';

import { Sketch } from '../types/sketch';
import Fab from '../../../common/fab/fab';

interface SidebarProps {
  className: string;
  sketches: Sketch[];
  addSketch: (arg0: Sketch) => void;
}


const Sidebar = ({
  className = '',
  sketches = [],
  addSketch,
}: SidebarProps) => (
    <div className={className}>
      {sketches.map((s, i) => (
        <div key={i}>
          {s.name}
        </div>
      ))}

      <div style={{padding: "10px"}}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            addSketch({
              id: 0,
              name: 'New Sketch'
            });
        }}>
          Add
        </Button>
      </div>

      <div style={{padding: "10px"}}>
        <Fab />
      </div>
    </div>
);

export default Sidebar;
