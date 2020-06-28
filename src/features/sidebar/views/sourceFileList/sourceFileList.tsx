import React from 'react';

import styled from 'styled-components';
import SourceFileRow from '../sourceFileRow';
import { SourceFile } from '../../../../services/project/types';


export const SourceFileList : React.FC<SourceFileListProps> = (props) => (
  <div className={props.className}>
    {props.sourceFiles?.map((s, i) => (
      <SourceFileRow
        sourceFile={s}
        key={i}
        selected={s.id === props.selectedSourceFileId}
        onClick={() => props.setSelected(s.id)}
      />
    ))}
  </div>
);

interface SourceFileListProps {
  className?: string;
  sourceFiles: SourceFile[];
  selectedSourceFileId: number;
  setSelected: (id: number) => void;
}

export default styled(SourceFileList)`
  height: 100%;
  overflow-y: auto;
`;
