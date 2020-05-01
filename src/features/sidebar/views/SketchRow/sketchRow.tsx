import React from 'react'
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

import { Sketch } from '../../../../repository/sketch';

interface SketchRowProps {
  sketch: Sketch;
};

const Container = withTheme(styled.div`
  width: 100%;
  min-height: 48px;

  color: white;

  background-color: ${ props => props.theme.palette.action.active };

  :hover {
    background-color: ${ props => props.theme.palette.action.hover };
  }
`);

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
      <Container>
        <Name>{this.props.sketch.name}</Name>
        Rendered { this.renderCount } times
      </Container>
    )
  };

}

export default SketchRow;
