import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Content from './components/ContentList/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
