import React from 'react';
import styled from 'styled-components';

import CustomSimpleEditor from './customSimpleEditor/CustomSimpleEditor';
import { SourceFile } from '../../services/project/types';

interface EditorProps {
  className?: string;
  count?: number;
  sourceFile?: SourceFile;
  updateCode: (id: number, value: string) => void;
  requestBuild: () => void;
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
        value={props?.sourceFile?.code}
        onValueChange={(value) => {
          const id = props.sourceFile?.id;
          if (id) {
            props.updateCode(id, value);
            props.requestBuild();
          }
        }}
      />
    </Div>
  );
};

export default Editor;
