import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from './features/sidebar';

import './App.css';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <div className="main-content" />
        <Sidebar className="sidebar" />
      </div>
    </Provider>
  );
}

export default App;
