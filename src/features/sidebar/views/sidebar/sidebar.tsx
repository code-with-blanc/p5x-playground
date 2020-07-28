import React, { useState } from 'react';
import styled from 'styled-components';

import IconDelete from '@material-ui/icons/Delete';
import IconAdd from '@material-ui/icons/Add';

import { Button } from '../../../../common';

import Console from '../../../console';
import SourceFileList from '../sourceFileList';
import ProjectSelect from '../projectSelect';

const Sidebar : React.FC<SidebarProps> = ({
  className, addSourceFile, removeSourceFile, activeSourceFileId,
}) => {
  const [prj, setPrj] = useState(0);
  const prjs = [
    { value: 0, label: 'Item 0' },
    { value: 1, label: 'Item 1' },
    { value: 2, label: 'Item 2' },
    { value: 3, label: 'Item 3' },
    { value: 4, label: 'Item 4' },
    { value: 5, label: 'Item 5' },
  ];

  return (
    <Container className={className}>
      <div className="select-project">
        <ProjectSelect
          value={prj}
          items={prjs}
          onChange={(value) => { setPrj(value); }}
        />
      </div>

      <SourceFileList className="list" />

      <div className="button-add">
        <Button
          color="green"
          onClick={addSourceFile}
        >
          <IconAdd />
        </Button>
      </div>

      <div className="button-delete">
        <Button
          color="Red"
          onClick={() => removeSourceFile(activeSourceFileId)}
        >
          <IconDelete />
        </Button>
      </div>

      <Console className="console" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  background-color: ${(props) => props.theme.palette.background.default};

  display: grid;
  grid-template-rows: auto 1fr auto 1fr;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    "select-project select-project"
    "list list"
    "btn-add btn-delete"
    "console console";

  & .select-project {
    grid-area: select-project;
    padding: 10px 4px 2px 4px;
  }

  & .list {
    margin-top: 12px;
    grid-area: list;
  }

  & .button-add {
    grid-area: btn-add;
    margin: 12px 6px;
  }

  & .button-delete {
    grid-area: btn-delete;
    margin: 12px 6px;
  }

  & .console {
    grid-area: console;
    background-color: black;
    overflow-y: auto;
  }
`;

interface SidebarProps {
  className: string;
  activeSourceFileId: number;
  addSourceFile: () => void;
  removeSourceFile: (id: number) => void;
}

export default Sidebar;
