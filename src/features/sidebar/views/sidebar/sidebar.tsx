import React from 'react';

import { Sketch } from '../../../../repository/sketch';
import { FabAdd } from '../../../../common';

import SketchRow from '../SketchRow';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow-y: hidden;

  background-color: ${ props => props.theme.palette.background.default };

  .fab {
    position: absolute;
    bottom: 40px;
    right: 20px;
    
    padding: 10px;
  }
`;

const ListContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Sidebar = (props: SidebarProps) => (
  <Container className={props.className}>
    {/* TODO: create list component, use mui paper API */}
    <ListContainer>
      <div>
        {props.sketches?.map((s, i) => (
          <SketchRow sketch={s} key={i} />
        ))}
      </div>
    </ListContainer>

      <FabAdd
        className="fab"
        size = 'small'
        onClick={ () => props.addSketch() }
      />
  </Container>
);

interface SidebarProps {
  className: string;
  sketches: Sketch[];
  addSketch: () => void;
}

export default Sidebar;
