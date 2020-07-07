import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';

import runSourceFile from './interpreter';

export const Preview : React.FC<Props> = ({
  className, bundle,
}) => {
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    runSourceFile(bundle, canvasRef);
  }, [bundle, canvasRef]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} width="355" height="200" />
    </div>
  );
};

interface Props {
  className?: string;
  bundle?: string;
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
  font-family: ${(props) => props.theme.typography.fontFamily};

  & canvas {
    width: 100%;
    height: 100%;
  }
`;
