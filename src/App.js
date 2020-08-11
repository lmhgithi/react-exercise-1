import React, { Component } from 'react';
import './App.scss';

import headerInfo from './components/HeaderInfo';
import CVContent from './components/CVContent';

class App extends Component {
  render() {
    return (
      <main className="app">
        {headerInfo}
        {CVContent}
      </main>
    );
  }
}

export default App;
