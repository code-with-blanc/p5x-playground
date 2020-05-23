import React, { useState } from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

const Container = styled('div')`
  border-radius: 5px;

  padding-left: 0.5em;
  padding-right: 0.5em;

  cursor: default;
  input {
    cursor: default;
  }

  :hover {
    background-color: ${({theme}) => theme.palette.button.hover};
  }
  :focus-within {
    background-color: ${({theme}) => theme.palette.button.hover};
    cursor: text;
    input {
      cursor: text;
    }
  }
`;

export const ClickableTextField : React.FC<Props> = ({
  className, defaultValue, value, onChange,
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const [hasFocus, setFocus] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>();

  const isControlled = value !== undefined && value !== null;

  return (
    <Container
      className={className}
      onClick={() => inputRef?.current?.focus()}
    >
      <InputBase
        inputRef={inputRef}
        fullWidth

        value={
          isControlled ? (
            hasFocus
              ? value
              : value || defaultValue            
          ) : (
            hasFocus
              ? uncontrolledValue
              : uncontrolledValue || defaultValue
          )
        }

        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(event) => {
          if(!isControlled) {
            setUncontrolledValue(event.target.value);
          }
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
  value?: string;
  onChange?: ((value: string) => void) | (() => void);
}
