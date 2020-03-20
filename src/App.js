import React from 'react';
import './App.css';
import Lait from './lait';
import Portefeuille from './portefeuille';
import FeuilleDeComptes from './feuilleDeComptes';

function App() {
  return (
    <div className="App">
      <Portefeuille/>
      <Lait/>
      <FeuilleDeComptes/>
      
    </div>
  );
}

export default App;
