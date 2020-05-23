import React from 'react';
import { Provider } from 'react-redux';

import ThemeProvider from './setup/themes/ThemeProvider';
import store from './setup/redux/store';

import AppBar from './features/appbar';
import Sidebar from './features/sidebar';
import Editor from './features/editor';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <AppBar className="appbar" />
          
          <Editor className="editor"/>
          <Sidebar className="sidebar" />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
