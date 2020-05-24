import muiTheme from './muiTheme';
import { DefaultTheme } from 'styled-components';
import { green, deepOrange } from '@material-ui/core/colors';

const theme = {
  ...muiTheme,
  palette: {
    ...muiTheme.palette,
    background: {
      default: muiTheme.palette.background.default,
      paper: muiTheme.palette.background.paper,
    },
    
    list: {
      background: muiTheme.palette.background.default,
      hover: muiTheme.palette.background.paper,
    },

    button: {
      default: muiTheme.palette.secondary,
      red: muiTheme.palette.augmentColor({ main: deepOrange[800]}),
      green: muiTheme.palette.augmentColor({ main: green[700]}),
    }
  }
};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export type ApplicationTheme = DefaultTheme; 
export default theme;