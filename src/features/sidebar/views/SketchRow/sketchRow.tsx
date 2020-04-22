import React from 'react'

import { Sketch } from '../../types/sketch';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

interface SketchRowProps {
  sketch: Sketch;
};

const Container = withTheme(styled.div`
  width: 100%;
  min-height: 48px;

  background-color: ${ props => props.theme.palette.action.active };

  :hover {
    background-color: ${ props => props.theme.palette.action.hover};
  }
`);

const Name = styled.div`
  padding: 6px;
  padding-left: 8px;

  color: white;
  font-size: 1em;
  font-weight: 500;
`;

const sketchRow = (props : SketchRowProps) => {
  console.log(props);

  return (
    <Container>
      <Name>{props.sketch.name}</Name>
    </Container>
  )
};

export default sketchRow;
