import React from 'react';

import styled from 'styled-components';
import SketchRow from '../SketchRow';
import { Sketch } from '../../../../repository/sketch';


export const SketchList : React.FC<SketchListProps> = (props) => (
  <div className={props.className}>
    {props.sketches?.map((s, i) => (
      <SketchRow
        sketch={s}
        key={i}
        selected={s.id === props.selectedSketchId}
        onClick={() => props.setSelected(s.id)}
      />
    ))}
  </div>
);

interface SketchListProps {
  className?: string;
  sketches: Sketch[];
  selectedSketchId: number;
  setSelected: (id: number) => void;
}

export default styled(SketchList)`
  height: 100%;
  overflow-y: auto;
`;
