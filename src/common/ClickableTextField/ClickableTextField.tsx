import React, { useState } from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

export const ClickableTextField : React.FC<Props> = ({
  className, defaultValue, value: controlledValue, onChange, onFocus, onBlur,
}) => {
  const inputRef = React.useRef<HTMLInputElement>();
  const [uncontrolledValue, setUncontrolledValue] = useState<string|null>(null);
  const [hasFocus, setFocus] = useState(false);

  return (
    <Container
      className={className}
      onClick={() => inputRef?.current?.focus()}
    >
      <InputBase
        inputRef={inputRef}
        fullWidth

        value={
          hasFocus
            ? controlledValue ?? uncontrolledValue
            : (controlledValue ?? uncontrolledValue) || defaultValue
        }

        onFocus={() => {
          setFocus(true);
          if (onFocus) { onFocus(); }
        }}
        onBlur={() => {
          setFocus(false);
          if (onBlur) { onBlur(); }
        }}
        onChange={(event) => {
          const isControlled = (controlledValue !== undefined && controlledValue !== null);
          if (isControlled) {
            setUncontrolledValue(null);
          } else {
            setUncontrolledValue(event.target.value);
          }

          if (onChange) { onChange(event.target.value); }
        }}
      />
    </Container>
  );
};

const Container = styled('div')`
  border-radius: 5px;

  padding-left: 0.5em;
  padding-right: 0.5em;

  input {
    cursor: default;
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
  :focus-within {
    background-color: ${({ theme }) => theme.palette.background.paper};
    cursor: text;
    input {
      cursor: text;
    }
  }
`;

interface Props {
  className?: string;
  label?: string;
  defaultValue?: string;
  value?: string;
  onChange?: ((value: string) => void) | (() => void);
  onFocus?: () => void;
  onBlur?: () => void;
}
