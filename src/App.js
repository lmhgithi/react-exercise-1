import React, { Component } from 'react';
import './App.scss';

import HeaderInfo from './components/HeaderInfo';
import CVContent from './components/CVContent';

class App extends Component {
  render() {
    return (
      <main className="app">
        <HeaderInfo />
        <CVContent />
      </main>
    );
  }
}

export default App;
