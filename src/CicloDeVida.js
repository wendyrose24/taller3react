import React, { Component } from 'react';

class CicloDeVida extends Component {
  componentDidMount() {
    console.log('El componente se ha montado.');
  }

  componentDidUpdate() {
    console.log('El componente se ha actualizado.');
  }

  componentWillUnmount() {
    console.log('El componente se va a desmontar.');
  }

  render() {
    return (
      <div>
        <h1>Componente de Ciclo de Vida</h1>
        <p>Mira la consola para ver los mensajes del ciclo de vida.</p>
      </div>
    );
  }
}

export default CicloDeVida;
