import muiTheme from './muiTheme';

const theme = {
  palette: {
    background: {
      default: muiTheme.palette.background.default,
    },
    
    list: {
      background: muiTheme.palette.background.default,
      hover: muiTheme.palette.background.paper,
    },

    button: {
      hover: muiTheme.palette.background.paper,
    }
  }
};

export default theme;
