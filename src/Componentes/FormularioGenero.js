import React, { Component } from 'react'
import {GenresService}  from '../Servicio/GenresService'

class FormularioGenero extends Component {
  constructor(props) {
    super(props);

    const genre = this.getGenreById(props.match.params.id)      

    this.state = {
      name: genre.name,
      id: genre.id
    }
    
    this.save = this.save.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.getGenreById = this.getGenreById.bind(this);
  }

  getGenreById(idGenre)
  {
    const genre = GenresService.getById(idGenre);    
    if (genre === undefined || genre === null)
      return {name: "", id: null};
    return genre;
  }

  changeHandler(event)
  {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]:value});
  }

  save()
  {
    const genre = {name: this.state.name, id: this.state.id};

    const result = (genre.id === null)? GenresService.add(genre) : GenresService.edit(genre);
    alert(result.message);
    if (!result.isOk) 
      return false;    
    
    this.props.history.push('/Generos');    
  }

  render() {


    return (
      <form className="col-sm-12">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Genero</label>
          <input name="name" value={this.state.name} type="text" className="form-control" id="genero" aria-describedby="emailHelp" onChange={this.changeHandler}/>          
        </div>
        <button type="button" className="btn btn-primary" onClick={this.save}>Guardar</button>
      </form>
    );
  }
}

export default FormularioGenero;
