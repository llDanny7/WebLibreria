import React, { Component } from 'react'
import {GenresService}  from '../Servicio/GenresService'

class FormularioGenero extends Component {
  constructor(props) {
    super(props);    
    console.log(props.match.params.id, "constructor");
    this.state = {
      name: "",
      id: props.match.params.id
    }
    
    this.guardarGenero = this.guardarGenero.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event)
  {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]:value});
  }
  guardarGenero()
  {
    let genre = {name: this.state.name};
    let result = null;
    if (this.state.id == undefined)
      result = GenresService.add(genre);
    else{
      genre.id = this.state.id;
      result = GenresService.edit(genre)
    }
    if (result.isOk == false)
    {    
      alert(result.message);
      return false;
    }
    alert(result.message)
    this.props.history.push('/Generos');
    this.setState({name:""});
  }

  render() {
    return (
      <form class="col-sm-12">
        <div class="form-group">
          <label for="exampleInputEmail1">Genero</label>
          <input name="name" value={this.state.name} type="text" class="form-control" id="genero" aria-describedby="emailHelp" onChange={this.changeHandler}/>          
        </div>
        <button type="button" class="btn btn-primary" onClick={this.guardarGenero}>Guardar</button>
      </form>
    );
  }
}

export default FormularioGenero;
