import React from 'react'
import styled from 'styled-components';

import { Sketch } from '../../../../repository/sketch';

interface SketchRowProps {
  sketch: Sketch;
  selected?: Boolean;
  onClick?: any;
};

const Container = styled('div')<{selected?: Boolean} & React.HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  min-height: 48px;

  color: white;
  cursor: pointer;

  background-color: ${({selected, theme}) => (
    selected ?
      theme.palette.list.hover
      : theme.palette.list.background
  )};

  :hover {
    background-color: ${ props => props.theme.palette.list.hover };
  }
`;

const Name = styled.div`
  padding: 6px;
  padding-left: 8px;

  color: white;
  font-size: 1em;
  font-weight: 500;
`;

class SketchRow extends React.Component<SketchRowProps> {
  renderCount : number = 0;

  render() {
    this.renderCount += 1;

    return (
      <Container onClick={this.props.onClick} selected={this.props.selected}>
        <Name>{this.props.sketch.name}</Name>
      </Container>
    )
  };

}

export default SketchRow;
