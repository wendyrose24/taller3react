import React, { Component } from 'react';

class ContadorConCicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  componentDidMount() {
    console.log('El componente se ha montado.');
  }

  componentDidUpdate() {
    console.log('El componente se ha actualizado.');
  }

  componentWillUnmount() {
    console.log('El componente se va a desmontar.');
  }

  incrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
        <p>Mira la consola para ver los mensajes del ciclo de vida.</p>
      </div>
    );
  }
}

export default ContadorConCicloDeVida;
