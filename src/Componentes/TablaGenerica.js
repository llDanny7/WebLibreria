import React, { Component } from 'react'

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

  editRow(genre)
  {
    const {edit} = this.props;
    edit(genre)
  }

  render() {
    const {lista, cabecera, } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>            
            {cabecera.map((x, index) => 
              <th scope="col" key={index}> {x.titulo}</th>
              )}
          </tr>
        </thead>
        <tbody>
        {
          lista.map((x, indice) =>           
          <tr key={indice}>            
            {cabecera.map((cab, indice2) => <td key={indice+indice2}>{x[cab.propiedad]}</td>)}
            <td key={indice}>
              <button className="btn btn-success" onClick= { () => this.editRow(x)} >Editar</button>               
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