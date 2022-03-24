import React from 'react';
import './App.css';
import  Greet  from './components/Greet';
import { Welcome } from './components/Welcome';

function App():JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='pawan' last='bisht' age={10}/>
        <Welcome name='Pankaj' last='Bisht' />
      </header>
    </div>
  );
}

export default App;
