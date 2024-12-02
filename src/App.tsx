import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Textbox } from 'ui/components/textbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <section>
        <Textbox />
      </section>
    </div>
  );
}

export default App;
