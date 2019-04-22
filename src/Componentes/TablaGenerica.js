import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class TablaGenerica extends Component {
  constructor(props) {
    super(props);
    this.eliminarFila = this.eliminarFila.bind(this);
  }

  eliminarFila(genero)
  {    
    const {eliminar } = this.props;
    eliminar(genero);
  }

  render() {
    const {lista, cabecera, } = this.props;
    return (
      <table class="table">
        <thead>
          <tr>            
            {cabecera.map(x => 
              <th scope="col"> {x.titulo}</th>
              )}
          </tr>
        </thead>
        <tbody>
        {
          lista.map((x, indice) =>           
          <tr key={indice}>            
            {cabecera.map((cab, indice2) => <td key={indice+indice2}>{x[cab.propiedad]}</td>)}
            <td key={indice}> 
              <Link to={"/EditarGenero/"+x.id} className="btn btn-success">  Editar </Link> 
              <button className="btn btn-danger" onClick={ () =>this.eliminarFila(x)}> Eliminar </button> 
            </td>
          </tr> )
        }
        </tbody>
      </table>
    )
  }
}

export default TablaGenerica;