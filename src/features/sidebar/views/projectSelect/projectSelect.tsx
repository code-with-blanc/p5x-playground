import React from 'react';
import styled from 'styled-components';

import {
  FormControl, Select, MenuItem, ListSubheader,
} from '@material-ui/core';

import { Button } from '../../../../common';

type Item = { value: number, label: string };
type Props = {
  value: number;
  items: Item[];
  onChange: (value: number) => unknown;
  className?: string,
}

const ProjectSelect : React.FC<Props> = ({
  items: itemsProp, value, onChange, className,
}) => {
  const items : Item[] = [];
  itemsProp.forEach((item) => {
    if (item?.value === value) {
      items.unshift(item);
      return;
    }

    items.push(item);
  });

  return (
    <div className={className}>
      <FormControl fullWidth>
        <Select
          // open
          disabled={!Array.isArray(items) || items.length === 0}
          value={value}
          onChange={(e) => {
            const val = e?.target?.value;
            if (val !== undefined && val !== null) {
              onChange((val as unknown) as number);
            }
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            anchorOrigin: { horizontal: 'left', vertical: 'top' },
            marginThreshold: 0,
          }}
        >
          {
            items.map((item) => (
              <MenuItem key={item?.value} value={item?.value}>{item?.label}</MenuItem>
            ))
          }
          <ListSubheader>
            <div className="menu-item-extra">
              <Button
                onClick={() => {
                  // eslint-disable-next-line no-console
                  console.log('TODO: Should create new project!');
                }}
                className="button-new"
                disabled={false}
              >
                New Project
              </Button>
            </div>
          </ListSubheader>
        </Select>
      </FormControl>
    </div>
  );
};

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
