import React from 'react'

import { Fab, FabProps } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface FabAddProps extends FabProps {
  className?: string;
}

const FabAdd = ({ className, ...other }: FabAddProps) => (
  <Fab className={className} {...other}>
    <AddIcon />
  </Fab>
);


export default FabAdd;