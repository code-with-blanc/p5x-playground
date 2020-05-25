import React from 'react'
import styled from 'styled-components';

export const Preview : React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      Preview your code!      
    </div>
  )
}

interface Props {
  className?: string;
}

export default styled(Preview)`
  height: 100%;
  width: 100%;

  background-color: lightgray;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  font-size: 16pt;
  font-family: ${props => props.theme.typography.fontFamily};
`;
