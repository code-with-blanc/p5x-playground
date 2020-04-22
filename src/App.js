import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import configureStore from './redux/store';
import Sidebar from './features/sidebar';

import './App.css';

import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: { main: '#89FFF5' },
    secondary: { main: '#1A4CAF' },
    error: { main: '#9B1D20' },
    success: { main: '#98CE5A' },
    background: {
      default: blueGrey[900],
    },

    action: {
      active: blueGrey[900],
      hover: blueGrey[800],
    }
//    white: { main: '#FFFFE8' },
  }
});

function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="main-content">
          </div>
          <Sidebar className="sidebar" />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
