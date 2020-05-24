import React from 'react';
import styled from 'styled-components';

import IconDelete from '@material-ui/icons/Delete';
import IconAdd from '@material-ui/icons/Add';

import { FabAdd } from '../../../../common';
import Button from '../../../../common/Button/Button';

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
  }

  render() {
    return (
      <Container className={this.props.className}>
        <Button
          color="green"
          onClick={() => console.log('add')}
        >
          <IconAdd />
        </Button>

        <Button
          color="Red"
        >
          <IconDelete/>
        </Button>

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
}

export default Sidebar;
