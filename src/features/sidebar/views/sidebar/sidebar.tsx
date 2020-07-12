import React from 'react';
import styled from 'styled-components';

import IconDelete from '@material-ui/icons/Delete';
import IconAdd from '@material-ui/icons/Add';

import Button from '../../../../common/Button/Button';

import Console from '../../../console';
import SourceFileList from '../sourceFileList';

const Sidebar : React.FC<SidebarProps> = ({
  className, addSourceFile, removeSourceFile, activeSourceFileId,
}) => {
  return (
    <Container className={className}>
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

      <Console className="console" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow-y: hidden;

  background-color: ${(props) => props.theme.palette.background.default};

  display: grid;
  grid-template-rows: 1fr 64px 1fr;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    "list list"
    "add delete"
    "console console";

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

  & .console {
    grid-area: console;
    background-color: black;
  }
`;

interface SidebarProps {
  className: string;
  activeSourceFileId: number;
  addSourceFile: () => void;
  removeSourceFile: (id: number) => void;
}

export default Sidebar;
