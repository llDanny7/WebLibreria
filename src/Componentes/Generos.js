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

  render()
  {
    const cabecera = [{titulo: "Id", propiedad: "id"}, {titulo: "Nombre", propiedad: "name"}];    
    return (
    <div class="col-sm-12">
        <div class="row">
          <h2> Géneros </h2>
        </div>
      <div class="row">
        <Link className="btn btn-primary" to="/CrearGeneros">Crear Género</Link>
      </div>
      <div class="row">
        <TablaGenerica lista= {this.state.generos} cabecera={cabecera} eliminar = {this.eliminarGenero}  />
      </div>
    </div>
    );
  }
}

export default Generos