import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

type Props = {
  value: number;
  items: { value: number, label: string }[];
  onChange: (value: number) => unknown;
}

const CustomSelect : React.FC<Props> = ({
  items, value, onChange,
}) => {
  const classes = useStyles();

  return (
    <FormControl
      fullWidth
      className={classes.formControl}
    >
      <Select
        value={value}
        onChange={(e) => { onChange((e.target.value as unknown) as number); }}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {items.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
