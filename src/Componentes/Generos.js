import React, {Component} from 'react'
import TablaGenerica from './TablaGenerica'
import {Link} from 'react-router-dom';
import {GenresService}  from '../Servicio/GenresService'

class Generos extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      generos: GenresService.getAll()
    }    
    this.eliminarGenero = this.eliminarGenero.bind(this);
    this.edit = this.edit.bind(this);
  }

  eliminarGenero(genre)
  {
    let resultDelete = GenresService.deleteById(genre.id);
    if (!resultDelete.isOk)
    {
      alert(resultDelete.message);
      return false;
    }

    alert(resultDelete.message);
    this.setState({generos: GenresService.getAll()})
  }

  edit(genre)
  {
    console.log(genre)
    this.props.history.push({pathname: '/EditarGenero/'+genre.id });
  }

  render()
  {
    const cabecera = [{titulo: "Id", propiedad: "id"}, {titulo: "Nombre", propiedad: "name"}];    
    return (
    <div className="col-sm-12">
        <div className="row">
          <h2> Géneros </h2>
        </div>
      <div className="row">
        <Link className="btn btn-primary" to="/CrearGeneros">Crear Género</Link>
      </div>
      <div className="row">
        <TablaGenerica lista= {this.state.generos} cabecera={cabecera} edit = {this.edit} eliminar = {this.eliminarGenero}  />
      </div>
    </div>
    );
  }
}

export default Generos