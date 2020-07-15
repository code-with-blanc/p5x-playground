import React from 'react';
import styled from 'styled-components';

import IconDelete from '@material-ui/icons/Delete';
import IconAdd from '@material-ui/icons/Add';

import { Button, Select } from '../../../../common';

import SourceFileList from '../sourceFileList';

const Sidebar : React.FC<SidebarProps> = ({
  className, addSourceFile, removeSourceFile, activeSourceFileId,
}) => {
  return (
    <Container className={className}>
      <Select
        value={3}
        items={[
          { value: 1, label: 'item 1' },
          { value: 2, label: 'item 2' },
          { value: 3, label: 'item 3' },
        ]}
        onChange={(e) => console.log(e)}
      />

      <SourceFileList className="list" />

      <Button
        className="button-add"
        color="green"
        onClick={addSourceFile}
      >
        <IconAdd />
      </Button>

      <Button
        className="button-delete"
        color="Red"
        onClick={() => removeSourceFile(activeSourceFileId)}
      >
        <IconDelete />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow-y: hidden;

  background-color: ${(props) => props.theme.palette.background.default};

  display: grid;
  grid-template-rows: 1fr 64px;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    "list list"
    "add delete";

  & .list {
    margin-top: 12px;
    grid-area: list;
  }

  & .button-add {
    grid-area: add;
    margin: 12px 6px;
  }

  & .button-delete {
    grid-area: delete;
    margin: 12px 6px;
  }
`;

interface SidebarProps {
  className: string;
  activeSourceFileId: number;
  addSourceFile: () => void;
  removeSourceFile: (id: number) => void;
}

export default Sidebar;
