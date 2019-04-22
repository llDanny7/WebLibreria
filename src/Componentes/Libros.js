import React, { Component } from 'react'
import TablaGenerica from './TablaGenerica'
import {Link} from 'react-router-dom';

class Libros extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      libros: this.obtenerLibros()
    }
    this.eliminarLibro = this.eliminarLibro.bind(this);
  }
  eliminarLibro(libro) {
    let listaLibros = JSON.parse(localStorage.getItem("LIBROS"));
    if (listaLibros == null) {
      alert("Error. No existe el libro");
      return false;
    }
    listaLibros = listaLibros.filter(g => g.titulo !== libro.titulo);
    localStorage.setItem("LIBROS", JSON.stringify(listaLibros));

    this.setState({libros: this.obtenerLibros()})
  }

  obtenerLibros() {
    let listaLibros = JSON.parse(localStorage.getItem("LIBROS"));
    if (listaLibros == null) listaLibros = [];
    return listaLibros;
  }
  render() {
    const cabecera = [{ titulo: "Id", propiedad: "id" }, { titulo: "Titulo", propiedad: "titulo" }, { titulo: "Precio", propiedad: "precio" }];    
    console.log("cuantas veces entra")
    return (
      <div class="col-sm-12">
        <div class="row">
          <h2> Libros </h2>
        </div>
        <div class="row">
          <Link className="btn btn-primary" to="/CrearLibros">Crear Libro</Link>
        </div>
        <div class="row">
          <TablaGenerica lista={this.state.libros} cabecera={cabecera} eliminar={this.eliminarLibro} />
        </div>
      </div>
    );
  }
}

export default Libros