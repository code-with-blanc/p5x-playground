import React from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from './themes/ThemeProvider';

import configureStore from './redux/store';

import Sidebar from './features/sidebar';
import Toolbar from './features/toolbar';

import './App.css';
import Editor from './features/editor';

function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider>
        <div className="App">
          <Toolbar className="toolbar" />
          
          <Editor className="editor"/>
          <Sidebar className="sidebar" />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
