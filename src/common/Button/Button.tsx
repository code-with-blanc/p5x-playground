import React from 'react';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import styled, { withTheme } from 'styled-components';

import { ApplicationTheme } from '../../setup/themes/styledComponentsTheme';
import IconMore from '@material-ui/icons/MoreHoriz';

const Button : React.FC<Props> = ({
  children, color, theme, ...rest
}) => {
  return (
    <StyledButton
      children={children ?? <IconMore/>}
      color={getColor(color, theme)}
      theme={theme}
      {...rest}
    />
  );
}

const StyledButton = styled<any>(ButtonBase)`
  min-height: 32px;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 5px;
  color: ${({color}) => color.contrastText };
  background-color: ${({color}) => color.main};
  :hover {
    background-color: ${({color}) => color.dark}
  }

  font-family: ${({theme}) => theme.typography.button.fontFamily};
  font-size: ${({theme}) => theme.typography.button.fontSize};
  font-weight: ${({theme}) => theme.typography.button.fontWeight};
  text-transform: uppercase;
`;

const getColor = (color: string | undefined, theme: ApplicationTheme) => {
  switch((color ?? '').toLowerCase()) {
    case "red":
      return theme.palette.button.red;
    case "green":
      return theme.palette.button.green;
    default:
      return theme.palette.button.default;
  }
}

interface Props extends ButtonBaseProps {
  className?: string;
  color?: string;
  theme: ApplicationTheme
};

export default withTheme(Button);
