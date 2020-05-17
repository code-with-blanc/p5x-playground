import { createMuiTheme } from '@material-ui/core';

import blueGrey from '@material-ui/core/colors/blueGrey';

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: { main: '#89FFF5' },
    secondary: { main: '#1A4CAF' },
    error: { main: '#9B1D20' },
    success: { main: '#98CE5A' },
    background: {
      default: blueGrey[900],
      paper: blueGrey[700],
    },
  }
});

export default muiTheme;
