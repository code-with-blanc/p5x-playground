import React, { useState } from 'react'
import styled from 'styled-components';
import { ClickableTextField } from '../../../../common/ClickableTextField/ClickableTextField';

const Container = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.palette.background.default };

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

const HalfWidth = styled.div`
  width: 50%;
`;

const Toolbar = (props: ToolbarProps) => {
  const [value, setValue] = useState('');
  
  return (
    <Container className={props.className}>
      <HalfWidth>
      <ClickableTextField
        defaultValue="uncontrolled"
        onChange={(value) => {
          console.log(value);
        }}
      />
      </HalfWidth>

      <HalfWidth>
      <ClickableTextField
        defaultValue="controlled: (default)"
        value = {value}
        onChange={( value) => {
          if(value.length < 12) {
            setValue("controlled: " + value);
          } else {
            setValue(value);
          }
        }}
      />
      </HalfWidth>
    </Container>
  )
}

interface ToolbarProps {
  className?: string;
  name?: string;
} 

export default Toolbar;
