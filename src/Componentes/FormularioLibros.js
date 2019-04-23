import React, { Component } from 'react'
import Select from 'react-select';
import {BookService} from '../Servicio/BookService'
import {GenresService} from '../Servicio/GenresService'

let options = [];

class FormularioLibros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: 0,
      selectedOption:null    
    }
    this.save = this.save.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    const listGenres = GenresService.getAll();
    options = listGenres.map(genre => {return {value:genre.id, label: genre.name};});
  }

  save()
  {
    const {title, price, selectedOption} = this.state;
    const idGenres = selectedOption.map( genre => genre.value);

    const book = {title: title, price: price, idGenres: idGenres};
    const result = BookService.add(book);

    alert(result.message);
    if (!result.isOk)
    {      
      return;
    }
    this.props.history.push("/Libros");
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }  
  render() {
    const { selectedOption } = this.state;
    return (
      <form className="col-sm-12">
        <div className="form-group">
          <label htmlFor="title">Libro</label>
          <input name="title" value={this.state.title} type="text" className="form-control" aria-describedby="emailHelp" onChange={this.changeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input name="price" value={this.state.price} type="numeric" className="form-control" onChange={this.changeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor="precio">Genero</label>
          <Select            
            isMulti
            name="colors"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          /> 
        </div>

         
        <button type="button" className="btn btn-primary" onClick={this.save}>Guardar</button>
      </form>
    );
  }
}

export default FormularioLibros