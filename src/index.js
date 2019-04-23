import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import FormularioGenero from './Componentes/FormularioGenero';
import FormularioLibros from './Componentes/FormularioLibros';
import Generos from './Componentes/Generos';
import Libros from './Componentes/Libros';
import Nav from './Componentes/Nav';
import './style.css';
import { HashRouter as Router, Route} from 'react-router-dom';

const divBodyStyle= 
{
  "marginTop": '70px'
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {

    return (
      <Router>        
          <div className="row">
            <Nav />
          </div>

          <div className="row" style={divBodyStyle} >
            <Route path="/" exact component={Hello} />
            <Route path="/Generos/"  component={Generos} />
            <Route path="/Libros" component={Libros} />
            <Route path="/CrearGeneros" component={FormularioGenero} />
            <Route path="/EditarGenero/:id" component={FormularioGenero} />
            <Route path="/CrearLibros" component={FormularioLibros} />
          </div>        
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
