import React, { useState } from 'react';
import styled from 'styled-components';
import { ClickableTextField } from '../../../../common/ClickableTextField/ClickableTextField';
import { SourceFile } from '../../../../services/project/types';
import BuildIndicator from '../buildIndicator';

const AppBar = (props: AppbarProps) => {
  const [originalName, setOriginalName] = useState<string | undefined>('');

  const updateName = (name?: string) => {
    if (props.sourceFile) {
      const newSourceFile = Object.assign(props.sourceFile, { name: name ?? '' });
      props.renameFile(newSourceFile);
    }
  };

  return (
    <Container className={props.className}>
      <ClickableTextField
        defaultValue={originalName}
        value={props.sourceFile?.name}
        onFocus={() => {
          setOriginalName(props.sourceFile?.name);
        }}
        onBlur={() => {
          if (!props.sourceFile?.name && originalName) {
            updateName(originalName);
          }
        }}
        onChange={(value) => { updateName(value); }}
      />

      <BuildIndicator />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.palette.background.default};
  padding-left: 4px;
  padding-right: 4px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

interface AppbarProps {
  className?: string;
  sourceFile?: SourceFile;
  renameFile: (sourceFile: SourceFile) => void;
}

export default AppBar;
