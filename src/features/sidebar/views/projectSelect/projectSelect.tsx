import React from 'react';
import styled from 'styled-components';

import {
  FormControl, Select, MenuItem, ListSubheader,
} from '@material-ui/core';

import { Button } from '../../../../common';
import { Project } from '../../../../services/project/types';

type Props = {
  className?: string;
  projects: Project[];
  activeProjectId: number | null;
  setActiveProject?: (id: number) => unknown;
  createNewProject?: () => unknown;
}

const sortWithSelectedFirst = (projects: Project[], selectedId: number | null) => {
  const sorted : Project[] = [];
  projects.forEach((project) => {
    if (project.id === selectedId) {
      sorted.unshift(project);
      return;
    }

    sorted.push(project);
  });

  return sorted;
};

const ProjectSelect : React.FC<Props> = ({
  className, projects, activeProjectId, setActiveProject = () => {}, createNewProject = () => {},
}) => {
  return (
    <div className={className}>
      <CustomSelect
        value={activeProjectId ?? ''}
        onChange={(value) => { setActiveProject(value); }}
      >
        {
          sortWithSelectedFirst(projects, activeProjectId).map((project) => (
            <MenuItem key={project?.id} value={project?.id}>{ project?.name }</MenuItem>
          ))
        }
        <ListSubheader>
          <NewProjectButton
            onClick={createNewProject}
          />
        </ListSubheader>
      </CustomSelect>
    </div>
  );
};

type CustomSelectProps = {
  value: number | string;
  onChange: (value: number) => unknown;
};

const CustomSelect : React.FC<CustomSelectProps> = ({
  value, onChange, children,
}) => (
  <FormControl fullWidth>
    <Select
      value={value}
      onChange={(e) => {
        const val = e?.target?.value;
        if (val !== undefined && val !== null) {
          onChange((val as unknown) as number);
        }
      }}
      inputProps={{ 'aria-label': 'Without label' }}
      MenuProps={{
        // anchorOrigin: { horizontal: 'left', vertical: 'top' },
        marginThreshold: 0,
      }}
    >
      {children}
    </Select>
  </FormControl>
);

const NewProjectButton = ({ onClick } : { onClick: () => unknown }) => (
  <div className="menu-item-extra">
    <Button
      onClick={onClick}
      className="button-new"
      disabled={false}
    >
      New Project
    </Button>
  </div>
);

export default styled(ProjectSelect)`
  padding: 4px;

  & menu-item-extra {
    background-color: red;
    
    & button-new {
      width: 100%;
      padding: 8px;
    }
  }
`;
