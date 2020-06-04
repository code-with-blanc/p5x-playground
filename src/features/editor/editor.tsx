import React from 'react';
import styled from 'styled-components';

import CustomSimpleEditor from './customSimpleEditor/CustomSimpleEditor';
import { Sketch } from '../../repository/sketch';

interface EditorProps {
  className?: string;
  count?: number;
  sketch?: Sketch;
  updateCode: (id: number, value: string) => void;
}

const Div = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  height: 100%;
  overflow-y: auto;
`;

const Editor : React.FC<EditorProps> = (props) => {
  return (
    <Div className={props.className}>
      <CustomSimpleEditor
        value={props?.sketch?.code}
        onValueChange={(value) => {
          const id = props.sketch?.id;
          if (id) {
            props.updateCode(id, value);
          }
        }}
      />
    </Div>
  );
};

export default Editor;
