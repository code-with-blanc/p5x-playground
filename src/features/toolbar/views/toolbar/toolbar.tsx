import React from 'react'
import styled from 'styled-components';

import { Sketch } from '../../../../repository/sketch';

const Container = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.palette.background.default };

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

const Title = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  
  font-size: 1.5em;
  font-weight: 500;
  color: white;
`;

const Toolbar = (props: ToolbarProps) => {
  return (
    <Container className={props.className}>
      <Title> { props.sketch?.name || "Sketch Name" } </Title>
    </Container>
  )
}

interface ToolbarProps {
  className?: string;
  sketch: Sketch;
} 

export default Toolbar;
