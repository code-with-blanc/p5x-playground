import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import configureStore from './redux/store';
import Sidebar from './features/sidebar';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#89FFF5' },
    secondary: { main: '#1A4CAF' },
    error: { main: '#9B1D20' },
    success: { main: '#98CE5A' },

//    black: { main: '#1C2326' }
//    white: { main: '#FFFFE8' },
  }
});

function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="main-content">
            <Button color="primary" variant="contained">
              Primary
            </Button>
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
          </div>
          <Sidebar className="sidebar" />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
