import React from 'react'
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

import { Sketch } from '../../../../types/sketch';

const Container = withTheme(styled.div`
  width: 100%;
  background-color: ${ props => props.theme.palette.background };

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`);

const Title = withTheme(styled.div`
  padding-left: 10px;
  padding-right: 10px;
  
  font-size: 1.5em;
  font-weight: 500;
  color: white;
`);

const Toolbar = (props: ToolbarProps) => {
  return (
    <Container className={props?.className}>
      <Title> { props.sketch?.name || "Sketch Name" } </Title>
    </Container>
  )
}

interface ToolbarProps {
  className?: string;
  sketch: Sketch;
} 

export default Toolbar;
