import React from 'react';
import styled from 'styled-components';

import IconDelete from '@material-ui/icons/Delete';
import IconAdd from '@material-ui/icons/Add';

import { FabAdd } from '../../../../common';
import Button from '../../../../common/Button/Button';

import SketchList from '../sketchList';

class Sidebar extends React.Component {
  props: SidebarProps;
  
  constructor(props: SidebarProps) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container className={this.props.className}>
        <SketchList className="list"/>
      
        <Button
          className="button-add"
          color="green"
          onClick={this.props.addSketch}
        >
          <IconAdd />
        </Button>

        <Button
          className="button-delete"
          color="Red"
          onClick={() => this.props.removeSketch(this.props.activeSketchId)}
        >
          <IconDelete/>
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow-y: hidden;

  background-color: ${ props => props.theme.palette.background.default };

  display: grid;
  grid-template-rows: 1fr 64px;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    "list list"
    "add delete";


  & .list {
    grid-area: list;
  }

  & .button-add {
    grid-area: add;
    margin: 12px 6px;
  }

  & .button-delete {
    grid-area: delete;
    margin: 12px 6px;
  }
`;

interface SidebarProps {
  className: string;
  activeSketchId: number;
  addSketch: () => void;
  removeSketch: (id: number) => void;
}

export default Sidebar;
