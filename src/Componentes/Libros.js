import React, { Component } from 'react'
import TablaGenerica from './TablaGenerica'
import {Link} from 'react-router-dom';
import {BookService} from '../Servicio/BookService'

class Libros extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      libros: BookService.getAll()
    }
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }

  delete(book)
  {
    const result = BookService.deleteById(book.id);

    alert(result.message);
    if (!result.isOk)
    {
      return;
    }

    this.setState({libros: BookService.getAll()})
  }

  edit()
  {
    alert("No se ha implementado de momento");
  }

  render() {
    const cabecera = [{ titulo: "Id", propiedad: "id" }, { titulo: "Titulo", propiedad: "title" }, { titulo: "Precio", propiedad: "price" }];    
    return (
      <div className="col-sm-12">
        <div className="row">
          <h2> Libros </h2>
        </div>
        <div className="row">
          <Link className="btn btn-primary" to="/CrearLibros">Crear Libro</Link>
        </div>
        <div className="row">
          <TablaGenerica lista={this.state.libros} cabecera={cabecera} eliminar={this.delete} edit = {this.edit} />
        </div>
      </div>
    );
  }
}

export default Libros