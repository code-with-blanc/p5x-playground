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

class Sidebar extends React.Component {
  props: SidebarProps;
  
  constructor(props: SidebarProps) {
    super(props);
    this.props = props;

    this.props.getSketches();
  }

  render() {
    return (
      <Container className={this.props.className}>
        <SketchList />

        <FabAdd
          className="fab"
          size="small"
          onClick={ () => this.props.addSketch() }
        />
      </Container>
    );
  }
}

interface SidebarProps {
  className: string;
  addSketch: () => void;
  getSketches: () => void;
}

export default Sidebar;
