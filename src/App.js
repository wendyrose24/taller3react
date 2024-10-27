import React from 'react';
import Contador from './Contador';
import CicloDeVida from './CicloDeVida';
import ContadorConCicloDeVida from './ContadorConCicloDeVida';

function App() {
  return (
    <div>
      <h1>Ejercicios de React</h1>
      <Contador />
      <CicloDeVida />
      <ContadorConCicloDeVida />
    </div>
  );
}

export default App;
