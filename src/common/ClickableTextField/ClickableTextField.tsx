// should
//    - hihghlight on hover
//    - focus when clicked
//    - unfocus when finish editing (click outside, esc, tab)

import React, { useState, InputHTMLAttributes } from 'react'
import styled from 'styled-components';

import { TextField } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';


const Container = styled('div')`
  border-radius: 5px;

  padding-left: 0.5em;
  padding-right: 0.5em;

  :hover {
    background-color: ${({theme}) => theme.palette.button.hover};
  }
  :focus-within {
    background-color: ${({theme}) => theme.palette.button.hover};
  }
`;

export const ClickableTextField : React.FC<Props> = ({
  className, defaultValue, onChange,
}) => {
  const [value, setValue] = useState('');
  const [hasFocus, setFocus] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>();

  return (
    <Container
      className={className}
      onClick={() => inputRef?.current?.focus()}
    >
      <InputBase
        value={
          hasFocus
           ? value
           : value || defaultValue
        }
        inputRef={inputRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}

        onChange={(event) => {
          setValue(event.target.value);
          if(onChange) {
            onChange(event.target.value);
          }
        }}
      />
    </Container>
  )
}

interface Props {
  className?: string;
  label?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
