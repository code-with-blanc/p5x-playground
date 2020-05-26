import React, { createRef, useEffect } from 'react'
import styled from 'styled-components';
import { Sketch } from '../../repository/sketch';

import runSketch from './interpreter';

export const Preview : React.FC<Props> = ({
  className, sketch,
}) => {
  const code = sketch?.code;
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    runSketch(code, canvasRef);
  }, [code, canvasRef]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} width="200" height="150%" />
    </div>
  )
}

interface Props {
  className?: string;
  sketch?: Sketch;
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
