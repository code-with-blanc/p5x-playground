import React, { useState } from 'react'
import styled from 'styled-components';
import { ClickableTextField } from '../../../../common/ClickableTextField/ClickableTextField';
import { Sketch } from '../../../../repository/sketch';

const AppBar = (props: AppbarProps) => {
  const [originalName, setOriginalName] = useState('');

  const updateName = (name: string) => {
    const newSketch = Object.assign(props.sketch, { name });
    props.updateSketch(newSketch);
  }

  return (
    <Container className={props.className}>
      <ClickableTextField
        className={props.sketch.name.toUpperCase()}
        defaultValue={originalName}
        value = {props.sketch.name}
        onFocus = {() => {
          setOriginalName(props.sketch.name);
        }}
        onBlur = {() => {
          if(!props.sketch?.name) {
            updateName(originalName);
          }
        }}
        onChange={(value) => { updateName(value) }}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.palette.background.default };
  padding-left: 4px;
  padding-right: 4px;

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

interface AppbarProps {
  className?: string;
  sketch: Sketch;
  updateSketch: (sketch: Sketch) => void;
} 

export default AppBar;
