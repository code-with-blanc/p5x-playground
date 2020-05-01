import React from 'react';
import styled from 'styled-components';

import { FabAdd } from '../../../../common';

import SketchList from '../sketchList';

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow-y: hidden;

  background-color: ${ props => props.theme.palette.background.default };

  .fab {
    position: absolute;
    bottom: 48px;
    right: 36px;
    
    padding: 10px;
  }
`;

const Sidebar = (props: SidebarProps) => (
  <Container className={props.className}>
    <SketchList />

    <FabAdd
      className="fab"
      size = 'small'
      onClick={ () => props.addSketch() }
    />
  </Container>
);

interface SidebarProps {
  className: string;
  addSketch: () => void;
}

export default Sidebar;
