import React from 'react'

import SketchRow from '../SketchRow';
import { Sketch } from '../../../../repository/sketch';
import styled from 'styled-components';

const ListContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const SketchList = (props: SketchListProps) => {
  return (
    <ListContainer>
      <div>
        {props.sketches?.map((s, i) => (
          <SketchRow
            sketch={s} key={i}
            selected={ s.id === props.selectedSketchId }
            onClick={() => props.setSelected(s.id)}
          />
        ))}
      </div>
    </ListContainer>
  )
}

interface SketchListProps {
  sketches: Sketch[];
  selectedSketchId: number;
  setSelected: (id: number) => void;
}

export default SketchList;
