import React from 'react'
import styled from 'styled-components';
import { ClickableTextField } from '../../../../common/ClickableTextField/ClickableTextField';

const Container = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.palette.background.default };

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

const Title = styled.div`
  padding: 8px;
  
  font-size: 1.2em;
  font-weight: 500;
  color: white;
`;

const Toolbar = (props: ToolbarProps) => {
  return (
    <Container className={props.className}>
      <ClickableTextField
        defaultValue = {props.name}
        onChange={(value) => {
          console.log(value);
        }}
      />
    </Container>
  )
}

interface ToolbarProps {
  className?: string;
  name?: string;
} 

export default Toolbar;
